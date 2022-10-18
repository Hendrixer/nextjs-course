---
path: "/pages"
title: "Routing with Pages"
order: "3A"
section: "Routing"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

You don't need to interact with a router directly to create pages. Next.js has built on conventions to make creating routes as easy as creating a file 🤙🏾.

To get started, create a directory in your root called `/pages`. Next.js will associate any file in this directory as a route. The file names determine the route name or pattern, and whatever component is exported is the actual page.

Now let's create an index route by creating a file: `/pages/index.jsx`.

Next, let's create a component and export it:

```jsx
export default () => <h1>Index Page</h1>
```

Start your dev server:

**npm**
```shell
npm run dev
```

**yarn**
```shell
yarn dev
```

We should now be able to navigate the browser to the index route of our app and see our h1's content. I really appreciate conventions like this that make developing apps that much more fun!


Ok, big deal, we created an index page, but what about paths like `myapp.com/project/settings` and `myapp.com/user/1` where `1` is a parameter? Don't even trip; Next.js has you covered there.


## Folders and routes

To create a path like `/project/settings` we can use folders in our `/pages` directory.
For our note taking app, we need the following routes for now:

```text
index => /
all notes => /notes
one note => /notes/:id
```

We already created the index route; let's create the all notes route:

```text
pages
  notes
    index.jsx
```

By adding an `index` page in a folder, we're telling Next.js that we want this component to be the index route for this path. So in this case, navigating to `/notes` will render the `pages/notes/index.jsx` component.

Here's a placeholder component for that page that you can use.
```jsx
export default () => <h1>Notes</h1>
```

> 🧠 &nbsp;&nbsp;**reminder**: We'll fill these pages out later with some excellent copy and pasting.


## Dynamic routes
Next.js makes it easy to create dynamic routes. Depending on if and how you want those pages to be prerendered will determine how you set them up. We're going to focus on creating dynamic routes that will not be built at build time but instead at run time on the server.

> 🧠&nbsp;&nbsp; **reminder**: We'll cover prerendering later, so don't overthink right now.

So to create a dynamic route, we can create a file that looks like this:

```
[id].jsx
```

Where `id` is the name of the parameter. You can name it whatever you want. Those brackets are not a typo or a placeholder; that's the syntax to create a dynamic route using file name conventions in the pages directory. So let's create our note route:

```
pages
  notes
    index.jsx
    [id].jsx
```

We can access the `id` param inside our page component using the  `useRouter` hook from the `next/route` module. This comes for free with Next.js.

```jsx
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <h1>Note: {id} </h1>
  )
}
```

There param name on the query object is the same name as the param name in the file for that page. 

```text
router.query.id
             |
             |
            [id].jsx

```

### Catch-all routes
There's a beautiful feature in Next.js that allows us to define catch-all routes for when we're too lazy to make a page for each one.

> 👍🏾&nbsp;&nbsp;**tip**: A lazy developer is a good developer, well, ...sometimes 🙄

What's a catch-all route, you say? Think of a glob.
```text
this/folder/**
```

Where `**` means everything inside `folder`. We can do the same with our dynamic routes!
All we need is to create a file in our pages directory like this:

```text
docs/[...param].jsx
```

So the ellipsis `...` is used in this example to same that this file will represent any route that matches `/docs/a` or `docs/a/b` or `docs/a/b/c/d/a/b`. You get the point. You can then access all the params the same way you do with a single route param. The only difference is the value will be an array of the params in order.

```jsx
import { useRouter } from 'next/router'

// file => /docs/[...params].jsx
// route => /docs/a/b/c

export default () => {
  const router = useRouter()
  const { params }= router.query

  // params === ['a', 'b', 'c']

  return (
    <h1>hello</h1>
  )
}
```

If you want to include the parent path in your catch-all route, you can use an optional catch-all route.

```text
docs/[[...param]].jsx
```

Just add another set of `[ ]` over your catch-all, and now `/docs` will be matched with all of its children. The params value on the `router.query` for the parent path will just be an empty object `{}`.


So when would you use catch-all routes? I find them useful for when you have a bunch of pages that have pretty similar if not identical layouts and style but have different content and need their own URL. Such things like docs and wikis are a perfect use case.

## Non-pages
So pages are special, but what about when you just need a component? Next.js doesn't have any conventions or opinions about that. The community usually creates a `/src/components` folder where all the components live.

> 🌲 &nbsp;&nbsp;**branch**: git checkout routing-with-pages
