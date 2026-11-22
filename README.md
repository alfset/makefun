# CVE-2026-105803 PoC: Git LFS config injection RCE via .lfsconfig

Repo contains .lfsconfig with a dot-mimic key (lfs.customtransfer.<name>.path.access) that passes the .lfsconfig allowlist and matches the unanchored regex in git-lfs tq.configureCustomAdapters.

Victim: git clone this repo with git-lfs installed and initialized (git lfs install). The smudge filter runs git-lfs fetch, which registers the injected custom transfer adapter and executes ./adapter with attacker-controlled content.

Affected: git-lfs 1.3.0 - 3.8.0. Patched in 3.8.1.
