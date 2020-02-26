// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-directory-js": () => import("./../src/pages/directory.js" /* webpackChunkName: "component---src-pages-directory-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-login-js": () => import("./../src/pages/login.js" /* webpackChunkName: "component---src-pages-login-js" */),
  "component---src-pages-profile-cat-js": () => import("./../src/pages/profileCat.js" /* webpackChunkName: "component---src-pages-profile-cat-js" */)
}

