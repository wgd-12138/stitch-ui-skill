#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
PLUGIN_NAME = "stitch-ui"
PLUGIN_SOURCE = REPO_ROOT / "plugins" / PLUGIN_NAME
CLAUDE_SKILL_SOURCE = PLUGIN_SOURCE / "skills" / PLUGIN_NAME


def copy_replace(src: Path, dst: Path) -> None:
    if not src.exists():
        raise FileNotFoundError(f"Source not found: {src}")
    if dst.exists():
        shutil.rmtree(dst)
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(src, dst)


def load_json(path: Path) -> dict:
    if not path.exists():
        return {
            "name": "local-plugins",
            "interface": {"displayName": "Local Plugins"},
            "plugins": [],
        }
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, data: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def install_codex(plugin_dir: Path, marketplace_path: Path) -> None:
    plugin_target = plugin_dir / PLUGIN_NAME
    copy_replace(PLUGIN_SOURCE, plugin_target)

    marketplace = load_json(marketplace_path)
    entry = {
        "name": PLUGIN_NAME,
        "source": {"source": "local", "path": f"./plugins/{PLUGIN_NAME}"},
        "policy": {"installation": "AVAILABLE", "authentication": "ON_INSTALL"},
        "category": "Productivity",
    }

    plugins = marketplace.setdefault("plugins", [])
    replaced = False
    for index, item in enumerate(plugins):
        if item.get("name") == PLUGIN_NAME:
            plugins[index] = entry
            replaced = True
            break
    if not replaced:
        plugins.append(entry)

    marketplace.setdefault("name", "local-plugins")
    marketplace.setdefault("interface", {"displayName": "Local Plugins"})
    marketplace["interface"].setdefault("displayName", "Local Plugins")
    save_json(marketplace_path, marketplace)

    print(f"[codex] Installed plugin to: {plugin_target}")
    print(f"[codex] Updated marketplace: {marketplace_path}")


def install_claude(skills_dir: Path) -> None:
    skill_target = skills_dir / PLUGIN_NAME
    copy_replace(CLAUDE_SKILL_SOURCE, skill_target)
    print(f"[claude] Installed skill to: {skill_target}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Install stitch-ui for Codex and/or Claude.")
    parser.add_argument("target", choices=["codex", "claude", "all"])
    parser.add_argument("--codex-plugin-dir", type=Path, default=Path.home() / "plugins")
    parser.add_argument(
        "--codex-marketplace",
        type=Path,
        default=Path.home() / ".agents" / "plugins" / "marketplace.json",
    )
    parser.add_argument("--claude-skills-dir", type=Path, default=Path.home() / ".claude" / "skills")
    args = parser.parse_args()

    if args.target in {"codex", "all"}:
        install_codex(args.codex_plugin_dir, args.codex_marketplace)
    if args.target in {"claude", "all"}:
        install_claude(args.claude_skills_dir)


if __name__ == "__main__":
    main()
