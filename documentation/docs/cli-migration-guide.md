---
id: cli-migration-guide
title: CLI Migrate Guide
sidebar_label: Migration Guide
---

Formerly, `project-cli` was living inside the boilerplate repository. This was making it hard to upgrade cli version for users. We've decided to move project cli to it's own package.

This guide will walk you through migrating to new cli.

If you have `@pankod/pankod-cli` in your devDependencies, you can skip this guide.

- Remove `project-cli` folder completely. (`rm -rf project-cli`)
- `npm install -D @pankod/pankod-cli`
- Add this to your `package.json`;

```
"pankod": {
  "projectType": "nextjs"
},
```
- Update your `cli` script in `package.json`;

```
"cli": "pankod-cli add",
```

That's it! Now you should be able to use new cli!
