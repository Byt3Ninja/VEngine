---
name: Portable npm lockfiles
description: Registry URL portability after Replit package-tool installs
---

Review lockfile URL changes after package-tool installs and retain public registry URLs for verified packages when the project is also installed outside Replit.

**Why:** The package tool wrote internal firewall hostname URLs into the lockfile during an otherwise targeted patch. The user also uses GitHub Actions and their own server, where those internal hosts are not accessible.

**How to apply:** Keep security checks and package installations through the supported package tool; normalize only the resulting lockfile URLs, preserving verified versions and integrity hashes. Do not use this to bypass a blocked package.
