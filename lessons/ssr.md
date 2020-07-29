---
path: "/working-with-ssr"
title: "Working with SSR"
order: "8A"
section: "Advanced Topics"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

Sometimes you just need to skip rendering some component on the server because:

* it depends on the DOM API
* it depends on client-side data
* something else

Next.js supports dynamic imports that, when used with components, will opt out of SSR.

```jsx
import dynamic from 'next/dynamic'

const SponsoredAd = dynamic(
  () => import('../components/sponsoredAd'),
  { ssr: false }
)

const Page = () => (
  <div>
    <h1>This will be prerendered</h1>

    {/* this won't*/}
    <SponsoredAd />
  </div>
)

export default Page
```
