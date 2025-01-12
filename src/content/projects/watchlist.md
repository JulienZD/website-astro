---
title: 'Watchlist App'
description: 'An easy way to track movies and shows to watch by yourself or with friends.'
summary: "A friend and I had a long list of movies we wanted to watch together. We tracked these in a shared Google Sheet, but this quickly became tedious. We wanted a way to easily add movies to the list, and to be able to mark them as watched. This is how the idea for [W2tch](https://w2tch.vercel.app) was born."
image: '/watchlist.jpg'
onHomepage: true
order: 2
stack: [Next.js, tRPC, Prisma, TailwindCSS, NextAuth]
repository: https://github.com/JulienZD/w2tch
---

While it's already possible to manage watchlists in apps such as IMDb and Letterboxd, they all have the following issue: It's not possible to share watchlists with others.

The initial version was built with SvelteKit, as that was my favorite framework at the time. The app worked fine, and even includes some features the current version doesn't: 
* A randomizer to pick the next thing to watch
* Temporary access without signup

While I was building the app, I heard a lot of good things about [tRPC](https://trpc.io) and wanted to build something with that. Sadly there wasn't much documentation at the time for using tRPC and SvelteKit together, so I couldn't use it in the project. I couldn't think of anything else to build, so I decided to rebuild the app with Next.js, as tRPC was built with that in mind. The code of the SvelteKit version is still available [here](https://github.com/julienzd/w2tch-sveltekit).

The app sources its data from [TMDB](https://themoviedb.org). [NextAuth](https://next-auth.js.org) is used to handle authentication, and [Prisma](https://prisma.io) to communicate with the database, hosted at [Planetscale](https://planetscale.com).

[View W2tch in action](https://w2tch.vercel.app/).
