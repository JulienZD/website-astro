---
title: 'Event planner'
description: 'An app to plan a group event with your friends '

summary: "I got annoyed with datumprikker.nl, due to it having too many ads and requiring an email address, so I built my own."
image: '/event-planner.png'
onHomepage: true
order: 1
stack: [SvelteKit, Drizzle, shadcn-svelte, Turso, TailwindCSS, Paraglide (i18n)]
repository: https://github.com/JulienZD/datepricker
---

This was a good small project to get back into Svelte, as I hadn't used it since v5 was announced. I briefly considered using [tRPC-SvelteKit](https://icflorescu.github.io/trpc-sveltekit/),
which I have used in [another project](https://github.com/JulienZD/trvlx) before. Eventually I figured it might be fun to just see what "vanilla" SvelteKit can do.

The app makes use of temporary cookies to maintain WIP states and local state - such as which events you created and have
participated in. I haven't used cookies like this before. I'm not sure whether it's a good convention to do so, 
but it seems to get the job done.


If you wish to try it out, head over to [datepricker](https://datepricker.jzd.me)!
