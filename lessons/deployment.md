---
path: "/deployment"
title: "Deployment"
order: "9A"
section: "Deployment"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

Depending on how you build your app will determine where you can deploy to.

By default, a Next.js app has to be deployed to an environment that supports Node.js. So that's pretty much everywhere except static hosting services like netlify (not easily anyway).

> 👍🏾 &nbsp;&nbsp;**tip**: You should deploy to Vercel. Vercel literally made Next.js.

If you export your app to be pure static (no need for Node), you can deploy to static hosting services. You can use:
`next export`

To do that. There are some [gotchas](https://nextjs.org/docs/advanced-features/static-html-export), though.

> ⚠️ &nbsp;&nbsp;**warning**: Be sure to change the hardcoded API URLs in the fetch calls to use and ENV var for the live URLs.

We're going to deploy to Vercel.
It's actually pretty easy. Install the CLI
**npm**
`npm i -g vercel`

**yarn**
`yarn global add vercel`

In your project, run:
```shell
vercel
```

That's it!
If your project is already on GitHub, you can deploy that way from Vercel as well. Create an account and connect your GitHub account.
