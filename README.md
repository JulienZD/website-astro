# Hi

This is the source code for my website at https://jzd.me. Built with [Astro](https://astro.build).

## Getting started

Requires Node 24 (see `.nvmrc`) and pnpm, which is pinned via `packageManager` and provisioned by Corepack.

```sh
pnpm install
pnpm dev
```

## Scripts

| Script              | What it does                                               |
| ------------------- | ---------------------------------------------------------- |
| `pnpm dev`          | Dev server                                                 |
| `pnpm build`        | Type-check, then build to `dist/`                          |
| `pnpm preview`      | Serve the built site                                       |
| `pnpm check`        | `astro check` — types for `.ts` _and_ `.astro` frontmatter |
| `pnpm check:fast`   | Native TypeScript 7 check, `.ts` only                      |
| `pnpm lint`         | oxlint                                                     |
| `pnpm format`       | oxfmt, plus Prettier for `.astro`                          |
| `pnpm format:check` | The same, in check mode                                    |

## Toolchain notes

**Two TypeScript versions are installed on purpose.**

- `typescript` resolves to 6.x. This is what `astro check` and the Astro VS Code
  extension use, and it is the source of truth for type errors.
- `typescript-native` is an alias for `typescript@7`, the native (Go) compiler.
  `pnpm check:fast` runs it for a near-instant check while iterating.

TypeScript 7 cannot replace 6 here yet: it does not expose the programmatic API
that Volar-based tools need, so `astro check` cannot type-check `.astro`
templates with it. See
[withastro/roadmap#1321](https://github.com/withastro/roadmap/discussions/1321).
Once that lands, drop the alias and move `typescript` to 7.

Note that `node_modules/.bin/tsc` resolves to the TypeScript 7 binary, since
both packages ship a `tsc`. The scripts above never rely on it — `check:fast`
calls the aliased package by path.

**`pnpm-workspace.yaml` is not a workspace declaration.** It carries the
`allowBuilds` allow-list that pnpm 10+ requires for dependency build scripts,
which pnpm 11 reads from this file only. The empty `packages` field is there so
pnpm 9 can still read the file: Vercel only supports pnpm up to 10 natively and
falls back to 9 unless `ENABLE_EXPERIMENTAL_COREPACK=1` is set on the project.

**Formatting is split by file type.** oxfmt owns `.ts`, `.json`, `.css`, `.md`
and friends; it has no `.astro` support yet, so Prettier with
`prettier-plugin-astro` handles those. oxlint lints `.astro` frontmatter and
`<script>` blocks, but not templates — there is no template-level a11y linting
at the moment.
