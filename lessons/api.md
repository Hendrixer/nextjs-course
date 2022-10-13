---
path: "/api"
title: "API Routes"
order: "6A"
section: "API"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

Next.js is a full-stack framework. Fullstack, as in it, has a server, not just for development, for rendering components on your server, but also for an API! 

Yes, you can legit ship an API right next to your App with no setup. Let's see how.


All we have to do is create an `api` folder in our `pages` directory. The file names and paths work just like pages do. However, instead of building components in those files, we'll create API handlers.

```text
pages
  api
    hello.js
```

> 👍🏾 &nbsp;&nbsp;**tip**: Next.js API routes are not the same as Vercel's Serverless API functions, although the setup is similar.
