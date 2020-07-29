---
path: "/api-handlers"
title: "API Handlers"
order: "6B"
section: "API"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

Now let's create some API handlers to handle data for our Notes app. The handlers are based on [Connect](https://www.npmjs.com/package/connect), which [Express](https://expressjs.com/). 

> 👍🏾 &nbsp;&nbsp;**tipe**: You can learn more about [Express and APIs with Node.js](https://frontendmasters.com/courses/api-design-nodejs-v3/) from Frontend Masters

A handler looks like this:

```js
// pages/api/data.js
// route => /api/data

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: 'hello' }))
}
```

By default, this handler will respond to all requests to `/api/data`. We need to split our logic based on the methods (GET, PUT, DELETE, etc.). We also need some way to use connect-based middleware, which would make building out these handlers much simpler. 

We can quickly look at the incoming request and get the method, and we can create some HOF's to handle middleware, but I landed on an excellent package that helps with this. 

```js
// pages/api/data
import nc from 'next-connect';
import cors from 'cors'

const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get((req, res) => {
    res.send('Hello world')
  })
  .post((req, res) => {
    res.json({ hello: 'world' })
  })
  .put(async (req, res) => {
    res.end('hello')
  })
  
export default handler;
```

Pretty clean! Now, let's create some API routes for our Notes app. We need some basic CRUD:

```text
create note => POST /api/note
update note => PATCH /api/note/:id
delete note => DELETE /api/note/:id
get one note => DELETE /api/note/:id
get all notes => DELETE /api/note/
```

So from above, we only have 2 routes:
`/api/note/:id`

`/api/note/`

First, let's create a place to store our data. We'll stick to in memory for now.

```js
// src/data/data.js
const notes = []

module.exports = notes
```

Next, we'll create the routes in the `page/api/` directory.

```text
pages
  api
    note
      [id].js
      index.js
```

```js
// pages/api/note/index.js
import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc()
  .get((req, res) => {
    res.json({data: notes})
  })
  .post((req, res) => {
    const id = Date.now()
    const note = {...req.body, id}

    notes.push(note)
    res.json({data: note})
  })
export default handler
```

```js
// pages/api/note/[id].js
import nc from 'next-connect'
import notes from '../../../src/data/data'

const getNote = id => notes.find(n => n.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: note})
  })
  .patch((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }
    
    const i = notes.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...note, ...req.body}

    notes[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const note = getNote(req.query.id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }
    const i = notes.findIndex(n => n.id === parseInt(req.query.id))
    
    notes.splice(i, 1)

    res.json({data: req.query.id})
  })
  

export default handler
```

We can access the URL params on `req.query.paramName` just like with the client-side router.
