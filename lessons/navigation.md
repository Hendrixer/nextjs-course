---
path: "/navigation"
title: "Navigation"
order: "3B"
section: "Routing"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

Next.js has a few tricks up its sleeve to help us navigate between pages.

## Link component
Similar to an `<a>` tag, we can use the `Link` component from then `next/link` module. 

```jsx
<Link href="/settings">
  <a>settings</a>
</Link>
```

There Link component allows you to do **client-side** routing. This is important because if you don't want that or are linking to another site, then you should just use an `a` tag instead.

You must have an `a` tag as the child of the `Link` component, but the `href` lives on the `Link`. 
> 👍🏾&nbsp;&nbsp;**tip**: Update your linter to not error out because your `<a>` tag does not have an href.

The `href` prop takes a page name as it is in the pages directory.
For dynamic routes, you will need the `as` prop as well.

```jsx
<Link href="/user/[id].js" as={`/user/${user.id}`}>
  <a>user</a>
</Link>
```

Let's link our pages together!

```jsx
// pages/index.jsx
import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <h1>Index page</h1>

    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div> 
)
```

```jsx
// pages/notes/index.jsx
import React from 'react'
import Link from 'next/link'

export default () => {
  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))

  return (
    <div>
      <h1>Notes</h1>

      {notes.map(note => (
        <div key={note.id}>
          <Link href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
```

```jsx
// pages/notes/[id].jsx
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  )
}
```

## Programmatic routing

For when you need to route between pages programmatically, you can use the router to do so. There are [many methods](https://nextjs.org/docs/routing/introduction) on the router that you can use, so we'll focus on the ones we'll use in this course.


Just like the `Link` component, use the router for client-side routing. To navigate to a page, you can use the `push` method, which works like `href` on the `Link` component.

```jsx 
import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const id = 2

  return (
    <div>
      <button onClick={e => router.push('/')}>
        Go Home
      </button>

      <button onClick={e => router.push('/user/[id]', `/user/${id}`)}>
        Dashboard
      </button>
    </div>
  )
}
```

And that's all there is to routing!
Our app doesn't look much like an app, no worries, we're going to fix that next.

> 🌲 &nbsp;&nbsp;**branch**: git checkout navigation
