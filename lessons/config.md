---
path: "/config"
title: "Customizing Next.js config"
order: "5A"
section: "Configuration"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

If you want to change the build system's behavior, extend Next.js's features, or add ENV variables, you can do this easily in the `next-config.js` file.

Either export and objet:

```js
module.exports = {
  webpack: {
    // webpack config properties
  },
  env: {
    MY_ENV_VAR: process.env.SECRET
  }
}
```

Or a function:

```js
const { PHASE_PRODUCTION_SERVER } = require('next/constants')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      ...defaultConfig,
      webpack: {
        plugins: [new BundleAnalyzerPlugin()]
      }
    }
  }

  return defaultConfig
} 
```

Above I'm adding the bundle analyzer webpack plugin during a prod build of Next.js. You can check out all the [different phases](https://github.com/vercel/next.js/blob/canary/packages/next/shared/lib/constants.ts) of Next.js.

Next.js is production-ready and handles almost everything, but don't be scared to reach to that config and extend what you need.
