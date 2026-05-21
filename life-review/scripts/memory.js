#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

function usage() {
  console.log(`Life Review memory helper

Usage:
  node memory.js init [--file <path>]
  node memory.js append --title <title> --entry <markdown> [--file <path>]
  node memory.js show [--file <path>]

Default file:
  ~/.life-review/memory.md
`);
}

function defaultMemoryFile() {
  return path.join(os.homedir(), ".life-review", "memory.md");
}

function expandHome(inputPath) {
  if (!inputPath) return inputPath;
  if (inputPath === "~") return os.homedir();
  if (inputPath.startsWith("~/") || inputPath.startsWith("~\\")) {
    return path.join(os.homedir(), inputPath.slice(2));
  }
  return inputPath;
}

function parseArgs(argv) {
  const args = [...argv];
  if (args[0] === "--help" || args[0] === "-h") {
    return {
      command: null,
      help: true,
      file: defaultMemoryFile(),
      title: null,
      entry: null
    };
  }
  const options = {
    command: args.shift(),
    file: defaultMemoryFile(),
    title: null,
    entry: null
  };

  while (args.length) {
    const arg = args.shift();
    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--file") {
      options.file = requireValue(arg, args.shift());
    } else if (arg === "--title") {
      options.title = requireValue(arg, args.shift());
    } else if (arg === "--entry") {
      options.entry = requireValue(arg, args.shift());
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  options.file = path.resolve(expandHome(options.file));
  return options;
}

function requireValue(flag, value) {
  if (!value || value.startsWith("--")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function template() {
  return `# Life Review Personal Memory

This file is private local memory for the life-review skill. Do not commit it to public repositories.

## Stable Facts

- 

## Current Goals

- 

## Recurring Patterns

- 

## Stuck Points

- 

## Effective Strategies

- 

## Preferences

- Advice style:
- Output style:
- Accountability:

## Open Questions

- 

## Review Log

`;
}

function ensureFile(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, template(), "utf8");
    console.log(`[ok] Created memory file: ${file}`);
  }
}

function init(file) {
  ensureFile(file);
  console.log(`[ok] Memory file ready: ${file}`);
}

function append(file, title, entry) {
  if (!title) throw new Error("--title is required for append");
  if (!entry) throw new Error("--entry is required for append");
  ensureFile(file);

  const date = new Date().toISOString().slice(0, 10);
  const block = `\n### ${date} - ${title}\n\n${entry.trim()}\n`;
  fs.appendFileSync(file, block, "utf8");
  console.log(`[ok] Appended memory entry to ${file}`);
}

function show(file) {
  ensureFile(file);
  process.stdout.write(fs.readFileSync(file, "utf8"));
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help || !options.command) {
    usage();
    return;
  }

  if (options.command === "init") {
    init(options.file);
  } else if (options.command === "append") {
    append(options.file, options.title, options.entry);
  } else if (options.command === "show") {
    show(options.file);
  } else {
    throw new Error(`Unknown command: ${options.command}`);
  }
}

try {
  main();
} catch (error) {
  console.error(`[error] ${error.message}`);
  process.exit(1);
}
