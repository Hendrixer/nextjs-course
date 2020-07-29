---
path: "/rendering-modes"
title: "Rendering Modes"
order: "7B"
section: "Data Fetching"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

Next.js looks at the data fetching in your page components to determine how and when to prerender your page. Here are the different modes:

`Static Generation`
Pages built at build time into HTML. CDN cacheable.

`Server-side Rendering`
Pages built at run time into HTML. Cached after
the initial hit.

`Client-side Rendering`
Single-page app

By default, all pages are prerendered, even if they don't export a data fetching method. You choose the prerendering method (static or SSR) by what data function you export in your page component.

For client-side rendering, fetch your data **inside** your components. You can mix and match these rendering modes to have a genuinely hybrid app ✨.
