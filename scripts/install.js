#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const packageRoot = path.resolve(__dirname, "..");
const skillSource = path.join(packageRoot, "life-review");
const skillName = "life-review";

function usage() {
  console.log(`Life Review Skill installer

Usage:
  npx -y github:mengli1018/life-review-skill [target] [options]

Targets:
  both      Install to Codex and Claude Code user skill folders (default)
  codex     Install to Codex user skill folder
  claude    Install to Claude Code user skill folder

Options:
  --project             For target "claude", install into ./.claude/skills
  --codex-dir <dir>     Override Codex skills directory
  --claude-dir <dir>    Override Claude Code skills directory
  --dry-run             Print destinations without copying files
  --help                Show this help

Examples:
  npx -y github:mengli1018/life-review-skill
  npx -y github:mengli1018/life-review-skill codex
  npx -y github:mengli1018/life-review-skill claude
  npx -y github:mengli1018/life-review-skill claude --project
`);
}

function parseArgs(argv) {
  const args = [...argv];
  const options = {
    target: "both",
    project: false,
    dryRun: false,
    codexDir: null,
    claudeDir: null
  };

  while (args.length) {
    const arg = args.shift();
    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--project") {
      options.project = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--codex-dir") {
      options.codexDir = requireValue(arg, args.shift());
    } else if (arg === "--claude-dir") {
      options.claudeDir = requireValue(arg, args.shift());
    } else if (["both", "codex", "claude"].includes(arg)) {
      options.target = arg;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function requireValue(flag, value) {
  if (!value || value.startsWith("--")) {
    throw new Error(`${flag} requires a directory value`);
  }
  return value;
}

function expandHome(inputPath) {
  if (!inputPath) return inputPath;
  if (inputPath === "~") return os.homedir();
  if (inputPath.startsWith("~/") || inputPath.startsWith("~\\")) {
    return path.join(os.homedir(), inputPath.slice(2));
  }
  return inputPath;
}

function defaultCodexSkillsDir() {
  if (process.env.CODEX_SKILLS_DIR) return process.env.CODEX_SKILLS_DIR;
  if (process.env.CODEX_HOME) return path.join(process.env.CODEX_HOME, "skills");
  return path.join(os.homedir(), ".codex", "skills");
}

function defaultClaudeSkillsDir(projectMode) {
  if (process.env.CLAUDE_SKILLS_DIR) return process.env.CLAUDE_SKILLS_DIR;
  if (projectMode) return path.join(process.cwd(), ".claude", "skills");
  return path.join(os.homedir(), ".claude", "skills");
}

function copyDir(source, destination) {
  if (!fs.existsSync(source)) {
    throw new Error(`Missing source skill directory: ${source}`);
  }

  fs.rmSync(destination, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.cpSync(source, destination, { recursive: true });
}

function installOne(label, baseDir, dryRun) {
  const resolvedBase = path.resolve(expandHome(baseDir));
  const destination = path.join(resolvedBase, skillName);
  if (dryRun) {
    console.log(`[dry-run] ${label}: ${destination}`);
    return;
  }
  copyDir(skillSource, destination);
  console.log(`[ok] Installed ${label} skill to ${destination}`);
}

function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    usage();
    return;
  }

  const installs = [];
  if (options.target === "both" || options.target === "codex") {
    installs.push({
      label: "Codex",
      dir: options.codexDir || defaultCodexSkillsDir()
    });
  }
  if (options.target === "both" || options.target === "claude") {
    installs.push({
      label: options.project ? "Claude Code project" : "Claude Code",
      dir: options.claudeDir || defaultClaudeSkillsDir(options.project)
    });
  }

  for (const install of installs) {
    installOne(install.label, install.dir, options.dryRun);
  }

  if (!options.dryRun) {
    console.log("\nDone. Try one of these prompts:");
    console.log("  使用 life-review skill，帮我复盘一件事。");
    console.log("  /life-review 帮我复盘为什么我总是想得多做得少。");
  }
}

try {
  main();
} catch (error) {
  console.error(`[error] ${error.message}`);
  process.exit(1);
}
