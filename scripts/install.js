#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

const repoRoot = path.resolve(__dirname, "..");
const pluginName = "stitch-ui";
const pluginSource = path.join(repoRoot, "plugins", pluginName);
const claudeSkillSource = path.join(pluginSource, "skills", pluginName);

function parseArgs(argv) {
  const args = {
    target: "all",
    codexPluginDir: path.join(os.homedir(), "plugins"),
    codexMarketplace: path.join(os.homedir(), ".agents", "plugins", "marketplace.json"),
    claudeSkillsDir: path.join(os.homedir(), ".claude", "skills"),
  };

  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const next = argv[index + 1];
      if (!next || next.startsWith("--")) {
        throw new Error(`Missing value for ${arg}`);
      }
      index += 1;
      if (key === "codex-plugin-dir") args.codexPluginDir = path.resolve(next);
      else if (key === "codex-marketplace") args.codexMarketplace = path.resolve(next);
      else if (key === "claude-skills-dir") args.claudeSkillsDir = path.resolve(next);
      else throw new Error(`Unknown option: ${arg}`);
    } else {
      positional.push(arg);
    }
  }

  if (positional[0]) {
    args.target = positional[0];
  }

  if (!["codex", "claude", "all"].includes(args.target)) {
    throw new Error(`Invalid target: ${args.target}`);
  }

  return args;
}

function ensureExists(source) {
  if (!fs.existsSync(source)) {
    throw new Error(`Source not found: ${source}`);
  }
}

function copyReplace(source, target) {
  ensureExists(source);
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true });
}

function loadMarketplace(filePath) {
  if (!fs.existsSync(filePath)) {
    return {
      name: "local-plugins",
      interface: { displayName: "Local Plugins" },
      plugins: [],
    };
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function saveJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function installCodex(codexPluginDir, codexMarketplace) {
  const pluginTarget = path.join(codexPluginDir, pluginName);
  copyReplace(pluginSource, pluginTarget);

  const marketplace = loadMarketplace(codexMarketplace);
  marketplace.name = marketplace.name || "local-plugins";
  marketplace.interface = marketplace.interface || {};
  marketplace.interface.displayName = marketplace.interface.displayName || "Local Plugins";
  marketplace.plugins = Array.isArray(marketplace.plugins) ? marketplace.plugins : [];

  const entry = {
    name: pluginName,
    source: { source: "local", path: `./plugins/${pluginName}` },
    policy: { installation: "AVAILABLE", authentication: "ON_INSTALL" },
    category: "Productivity",
  };

  const existingIndex = marketplace.plugins.findIndex((item) => item && item.name === pluginName);
  if (existingIndex >= 0) {
    marketplace.plugins[existingIndex] = entry;
  } else {
    marketplace.plugins.push(entry);
  }

  saveJson(codexMarketplace, marketplace);
  console.log(`[codex] Installed plugin to: ${pluginTarget}`);
  console.log(`[codex] Updated marketplace: ${codexMarketplace}`);
}

function installClaude(claudeSkillsDir) {
  const skillTarget = path.join(claudeSkillsDir, pluginName);
  copyReplace(claudeSkillSource, skillTarget);
  console.log(`[claude] Installed skill to: ${skillTarget}`);
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));

    if (args.target === "codex" || args.target === "all") {
      installCodex(args.codexPluginDir, args.codexMarketplace);
    }
    if (args.target === "claude" || args.target === "all") {
      installClaude(args.claudeSkillsDir);
    }
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
