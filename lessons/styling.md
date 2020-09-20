---
path: "/styling"
title: "Styling"
order: "4A"
section: "CSS and Styling"
description: "Learn Next.js with Scott Moss and Frontend Masters"
---

Next.js comes with some styling conventions baked in, and they're pretty good. Because Next.js uses React, you can also use any other mechanism that works with React to style your apps.

> 👍🏾&nbsp;&nbsp;**tip** You might have to extend Next.js to support your styling approach. More on that later.

When it comes to styling, you have global styles and component styles. For global CSS, you have to import them at the entry point of your app. Wait, where is the entrance to my Next.js app? It's actually created for you, but you can and have to create your own now that you want global styles.

Create an `pages/_app.jsx` file and add this:

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

This automatically gets created for you by default with the same code. In the `_app.jsx` you can import any CSS file, and the styles will be global now.

```jsx
import 'flexbox.css'
import '../mystyles.css'
```

Now, when you don't want global CSS, Next.js supports [css modules](https://github.com/css-modules/css-modules). This will scope your CSS, avoiding collisions.

> 🕳 &nbsp;&nbsp;**deep dive**: a unique class name is created every import to reuse the same CSS class names

You can import a CSS module file anywhere in your app. To create a CSS module, you have to use a special syntax in the file name.

`styles.module.css`

This makes CSS modules a perfect solution to styling components.

```text
components
  button.jsx
  button.module.css
```

> 👍🏾 &nbsp;&nbsp;**tip** You can use a CSS pre-processor by extending Next.js. We'll cover that later.

I prefer to use a different solution when styling all my React apps, which we're going to use today. 
