---
path: "/plugins"
title: "Plugins"
order: "5B"
section: "Configuration"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

The `next.config.js` file gives us the ability to do some powerful stuff. Because the config file has a convention, you should be able to use changes written by others. These are Next.js plugins. 

They look like this:

```js
// next.config.js
const withOffline = require('next-offline')
const config = {
  // your next config
}

module.exports = withOffline(config)
```

Most plugins follow the `withPluginName` format. They also usually take your custom Next.js config, if any, to ensure its returned and consumed by Next.js. This allows you to compose plugins:

```js
// next.config.js
const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')
const withReactSvg = require('next-react-svg')
const config = {
  env: {
    MY_ENV: process.env.MY_ENV
  }
}

module.exports = withPlugins([
  withOffline,
  [withReactSvg, {
    // config for reactSvgPlugin
  }]
], config)
```

We're going to install and env plugin that makes it super simple to use env vars in our app.

First, let's install the modules we need.

**npm**
```shell
npm i next-env dotenv-load --dev
```

**yarn**
```shell
yarn add next-env dotenv-load
```


In your `next.config.js` file:

```js
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()
```

Next, create a `.env` file on the root and add some envs.

```text
HELP_APP_URL=https://google.com
```

> ⚠️ &nbsp;&nbsp;**warning**: don't check .env files into git

Now, we'll use the env in our app. Go to the Nav component and add an `a` tag to link to the external app.

```jsx
// src/components/nav.jsx
<a sx={{
    color: 'text',
    fontSize: 3,
    cursor: 'pointer'
  }}
  href={process.env.HELP_APP_URL}
>
  Help
</a>
```
