---
path: "/what-is-nextjs"
title: "What is Next.js"
order: "2B"
section: "Next.js"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

First, let's talk about React. I like to think of React as a view library. Alone, you couldn't quickly build a modern app with React. You need routing, a build system, a way to style things, performance, etc 😰.

Next.js is a complete full-stack framework for modern apps that was created by the brilliant team at [Vercel](https://vercel.com). React is used as the view library of choice. So if you know React, then Next.js will be very familiar. When building an app from scratch with React, you have so many decisions to make and so many choices. Next.js has well thought out conventions baked in that make these decisions for you. So in that way, it's very opinionated. It's the conventions that are the secret sauce, though. These opinions come from years of experience building production-ready React apps. 

Here are some of the highlights that you get for free:

- Dev build system
- Production build system
- Prerendering
  - SSR
  - Build time
  - Static
- Routing
- API routes (*wow, really?*)

## What about create react app
Like Next.js, [create-react-app (CRA)]() has a bunch of opinions baked in too. However, CRA is more of a boilerplate created to help you get started with React faster. Because CRA is just React, you're still on the hook for something. Routing, Server Side Rendering, and an API, along with other things. 


## What about Gatsby
[Gatsby]() is more similar to Next.js than CRA. Gatsby has conventions built in the will to make anyone looking to make a static app with React happily. Gatsby is not a full-stack framework and cannot create API routes or server-side rendering. Gatsby does have features like a content mesh, GraphQL support built-in, image optimization, and others that Next.js does not have.

## When to use Next.js
Here's my general guide on when to use what when making a React app.
> 👍🏾 **tip** Save yourself some time and avoid starting a React app from scratch unless you use parcel 😛

#### Do you only need a single page app?

Use Create React App

#### Do you need a static site, like a blog, that's also a SPA?

Use Next.js or Gatsby.

#### Need SSR, an API, and all the above?

Use Next.js
