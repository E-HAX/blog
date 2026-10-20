---
title: "We Built GUIs for Humans. Now We Need CLIs for AI."
description: >-
  Decades of software design went into making computers easier for humans to
  use. AI agents are a different kind of user, and they work best with
  commands, structured output and direct programmatic access.
date: 2026-10-21 01:00:00 +0530
tags: [ai, agents, cli, developer-experience]
image:
  path: /assets/img/blogs/2026/guis-for-humans-clis-for-ai/cover.png
  alt: "An agent fixes a bug in four terminal commands while the browser GUI sits unused behind it"
---

Using a computer once meant staring at a blinking cursor on a black screen. No dashboards, no buttons, no drag-and-drop. Navigating directories, running a program or copying a file all meant typing the right command with the right syntax. Computers were powerful, but you had to learn their language to use them, and for most people that was intimidating.

AI agents are now making that old interface relevant again, for a reason nobody saw coming.

## The GUI revolution

As hardware improved and personal computers spread, graphical user interfaces took over. Windows, icons, menus and eventually touchscreens meant you could click a folder instead of remembering a command, or drag a file instead of typing a path. Millions of people who had never written a command could suddenly use a computer.

That was the right call. Software was being designed for humans, and **humans are visual creatures**. Browsers, productivity suites, design tools and project trackers all became GUI-first, and many terminal-only developer tools picked up graphical front ends. The terminal survived among developers and system administrators, because commands are excellent for automation and precision, but for everyone else the GUI became the default.

## A new kind of user

Large language models and agentic systems have changed who operates software. Agents now write code, edit files, work with repositories, run commands and call services as part of multi-step workflows. And **an agent does not need the interface a human needs.**

To find open bugs on GitHub, a human opens the repository in a browser, clicks the Issues tab and applies a filter. An agent with GitHub CLI runs one command and gets structured data back:

```bash
gh issue list --label bug --json number,title,state
```

No navigation, no hunting for buttons, no reading screenshots. Git, Docker, Kubernetes and countless other tools already expose CLIs like this, which is a big part of why terminal-native coding agents such as Claude Code and OpenAI Codex CLI work so well: files, commands, results and logs are all directly within reach.

## Why make an agent click?

Ask an agent to find open bugs, summarise them, locate the relevant files and prepare a fix. Through a GUI, that means opening a browser, finding and filtering the issues page, reading each issue from screenshots, switching to an editor, then navigating back to open a pull request. Every step adds latency and another chance to fail. Through a CLI, the same job is a short sequence of well-defined commands: query the issues, search the code, edit files, run tests, open the PR.

The point is not that commands are faster at everything. It is that **a single command can express a whole operation that takes many interactions in a GUI.** CLIs also tend to offer machine-readable output, predictable arguments, explicit errors and batch operations, all of which help an agent work reliably. And they save context: instead of repeated screenshots and visual interpretation, a well-designed CLI returns exactly the information needed, often as compact JSON.

## What about computer use?

Agents can already look at a screen, click and type much like a person, and that capability is improving quickly. But being able to use an interface is not the same as using it efficiently. Visual interaction is a loop of observing, locating elements, acting and checking what changed. A command or API call often does the job in one step.

That does not mean CLI agents always win. A [June 2026 study comparing GUI and CLI agents](https://arxiv.org/abs/2606.24551) on 440 desktop tasks found the strongest GUI agent passed **59.1%** of tasks, against **48.2%** for the strongest CLI agent using its original skill set. When the researchers expanded the CLI skills with verifier-guided augmentation, the CLI pass rate rose to **69.3%**.

The lesson is not that one interface beats the other. It is that **the capabilities an interface exposes matter enormously to how well an agent performs.** A [September 2026 paper, HybridCUA](https://arxiv.org/abs/2609.38008), points the same way: agents trained to combine GUI and CLI actions improved substantially over their base model.

Computer use will keep getting better. But when a direct, reliable command already exists, there is little reason to make an agent click through screen after screen to get the same result. **Just because an AI can use a mouse doesn't mean it should have to.**

## A new design question

Software teams have long asked how to make their products easier for humans: cleaner navigation, better dashboards, smoother onboarding. That still matters, but agents add a second question: **how easy is this software for an AI agent to use?**

Take two products with the same features. Both have a polished GUI, but only one also has a documented API and a well-designed CLI. A human may find them equally useful. An agent running repeated, multi-step operations will strongly prefer the second, because it can act, inspect state, handle errors and automate directly.

As more people work through agents, that gap will shape which tools fit into their workflows. At EHAX, we expect **agent accessibility to become a core part of developer experience and product design**, much as mobile responsiveness became a baseline expectation for the web.

## Does every application need a CLI?

Not necessarily, but we think far more of them should have one, especially those built around automation-heavy workflows.

A CLI is also not the only route. Well-designed APIs, SDKs and standards like the Model Context Protocol (MCP) give agents direct, structured access too, and sometimes a purpose-built tool is a better fit than a shell command. The aim is not to wrap every button in a terminal command. It is to make an application's important capabilities programmatically accessible, so an agent never has to reverse-engineer a GUI workflow to do something the application already knows how to do.

Where a CLI does make sense, the essentials are:

- predictable commands and arguments
- structured, machine-readable output
- clear, actionable error messages
- good documentation
- safe authentication
- guardrails for destructive operations

That last point matters more as software operates autonomously. Permissions, sandboxing, audit logs and confirmation for high-impact actions are what make direct access trustworthy. **A powerful interface is not useful if it cannot be trusted.**

## Not CLI versus GUI

GUIs are not going anywhere. People still need visual interfaces to explore, create, understand information and make decisions; nobody wants to edit a complex design or inspect a 3D model from a terminal. But for executing commands, manipulating structured data, running repeatable workflows and coordinating tools, direct programmatic interfaces are often the better fit.

So the future is not one replacing the other. It is software reachable through several interfaces, each suited to a different kind of user: GUIs for humans, CLIs, APIs and MCP tools for agents, and the best systems offering all of them.

## Full circle

The first CLIs existed because computers were not yet accessible to humans. GUIs arrived so computers could meet people on their own terms. Now AI systems understand human language and operate computers on our behalf, and the command line, long treated as a relic, is central again. Not because user experience stopped mattering, but because the user has changed.

**We built GUIs so humans wouldn't have to speak the computer's language. Now we are building agents that can speak it for us.**
