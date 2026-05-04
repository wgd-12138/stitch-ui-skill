#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function ensure(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function checkFile(relativePath) {
  ensure(exists(relativePath), `Missing required file: ${relativePath}`);
}

function checkPluginManifest() {
  const filePath = path.join(root, "plugins", "stitch-ui", ".codex-plugin", "plugin.json");
  const data = JSON.parse(read(filePath));
  ensure(data.name === "stitch-ui", "plugin.json name must be stitch-ui");
  ensure(data.skills === "./skills/", "plugin.json skills path must be ./skills/");
  ensure(data.interface && data.interface.displayName === "Stitch UI", "plugin displayName must be Stitch UI");
  ensure(Array.isArray(data.interface.defaultPrompt) && data.interface.defaultPrompt.length >= 1, "plugin default prompts must exist");
  ensure(Array.isArray(data.interface.screenshots) && data.interface.screenshots.length === 3, "plugin screenshots must list 3 assets");
}

function checkMarketplace() {
  const filePath = path.join(root, ".agents", "plugins", "marketplace.json");
  const data = JSON.parse(read(filePath));
  ensure(Array.isArray(data.plugins), "marketplace plugins must be an array");
  const entry = data.plugins.find((item) => item && item.name === "stitch-ui");
  ensure(entry, "marketplace must contain stitch-ui entry");
  ensure(entry.source && entry.source.path === "./plugins/stitch-ui", "marketplace path must point to ./plugins/stitch-ui");
}

function checkSkillFrontmatter() {
  const filePath = path.join(root, "stitch-ui", "SKILL.md");
  const content = read(filePath);
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  ensure(match, "SKILL.md must contain YAML frontmatter");
  ensure(/name:\s*stitch-ui/.test(match[1]), "SKILL.md frontmatter name must be stitch-ui");
}

function checkInstallDocs() {
  const readme = read(path.join(root, "README.md"));
  ensure(readme.includes(".\\install.ps1 all") || readme.includes("./install.sh all"), "README must include CLI install commands");
}

function main() {
  [
    "README.md",
    "README.zh-CN.md",
    "install.ps1",
    "install.sh",
    "install.cmd",
    "scripts/install.js",
    "stitch-ui/SKILL.md",
    "plugins/stitch-ui/assets/icon.svg",
    "plugins/stitch-ui/assets/logo.svg",
    "plugins/stitch-ui/assets/screenshot-1.png",
    "plugins/stitch-ui/assets/screenshot-2.png",
    "plugins/stitch-ui/assets/screenshot-3.png",
  ].forEach(checkFile);

  checkPluginManifest();
  checkMarketplace();
  checkSkillFrontmatter();
  checkInstallDocs();

  console.log("Validation passed.");
}

main();
