import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27c49426 = () => interopDefault(import('../pages/admin-uni.vue' /* webpackChunkName: "pages/admin-uni" */))
const _71e11acd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d160d8e0 = () => interopDefault(import('../pages/index/index.vue' /* webpackChunkName: "pages/index/index" */))
const _a96989e4 = () => interopDefault(import('../pages/index/about/index.vue' /* webpackChunkName: "pages/index/about/index" */))
const _6a3400f6 = () => interopDefault(import('../pages/index/grammar-course/index.vue' /* webpackChunkName: "pages/index/grammar-course/index" */))
const _df7f4cac = () => interopDefault(import('../pages/index/hall-of-fame/index.vue' /* webpackChunkName: "pages/index/hall-of-fame/index" */))
const _90bf0360 = () => interopDefault(import('../pages/index/ielts/index.vue' /* webpackChunkName: "pages/index/ielts/index" */))
const _76d0647a = () => interopDefault(import('../pages/index/kindergarten-course/index.vue' /* webpackChunkName: "pages/index/kindergarten-course/index" */))
const _1668c670 = () => interopDefault(import('../pages/index/news/index.vue' /* webpackChunkName: "pages/index/news/index" */))
const _2254ca4b = () => interopDefault(import('../pages/index/online-testing/index.vue' /* webpackChunkName: "pages/index/online-testing/index" */))
const _24c6e1ef = () => interopDefault(import('../pages/index/presentation-course/index.vue' /* webpackChunkName: "pages/index/presentation-course/index" */))
const _b1b1080a = () => interopDefault(import('../pages/index/primary-course/index.vue' /* webpackChunkName: "pages/index/primary-course/index" */))
const _786be76e = () => interopDefault(import('../pages/index/secondary-course/index.vue' /* webpackChunkName: "pages/index/secondary-course/index" */))
const _3affbced = () => interopDefault(import('../pages/index/steam-course/index.vue' /* webpackChunkName: "pages/index/steam-course/index" */))
const _543dc566 = () => interopDefault(import('../pages/index/storytelling-course/index.vue' /* webpackChunkName: "pages/index/storytelling-course/index" */))
const _3e357aa5 = () => interopDefault(import('../pages/index/toeic/index.vue' /* webpackChunkName: "pages/index/toeic/index" */))
const _19bda294 = () => interopDefault(import('../pages/index/transition-course/index.vue' /* webpackChunkName: "pages/index/transition-course/index" */))
const _2476a3d8 = () => interopDefault(import('../pages/index/news/abc.vue' /* webpackChunkName: "pages/index/news/abc" */))
const _508cbe92 = () => interopDefault(import('../pages/index/hall-of-fame/_id.vue' /* webpackChunkName: "pages/index/hall-of-fame/_id" */))
const _72ab9da0 = () => interopDefault(import('../pages/index/news/_id.vue' /* webpackChunkName: "pages/index/news/_id" */))
const _31e7a528 = () => interopDefault(import('../pages/gmail-form.vue' /* webpackChunkName: "pages/gmail-form" */))
const _3b88bde4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin-uni",
    component: _27c49426,
    name: "admin-uni___vi"
  }, {
    path: "/en",
    component: _71e11acd,
    children: [{
      path: "",
      component: _d160d8e0,
      name: "index___en"
    }, {
      path: "about",
      component: _a96989e4,
      name: "index-about___en"
    }, {
      path: "grammar-course",
      component: _6a3400f6,
      name: "index-grammar-course___en"
    }, {
      path: "hall-of-fame",
      component: _df7f4cac,
      name: "index-hall-of-fame___en"
    }, {
      path: "ielts",
      component: _90bf0360,
      name: "index-ielts___en"
    }, {
      path: "kindergarten-course",
      component: _76d0647a,
      name: "index-kindergarten-course___en"
    }, {
      path: "news",
      component: _1668c670,
      name: "index-news___en"
    }, {
      path: "online-testing",
      component: _2254ca4b,
      name: "index-online-testing___en"
    }, {
      path: "presentation-course",
      component: _24c6e1ef,
      name: "index-presentation-course___en"
    }, {
      path: "primary-course",
      component: _b1b1080a,
      name: "index-primary-course___en"
    }, {
      path: "secondary-course",
      component: _786be76e,
      name: "index-secondary-course___en"
    }, {
      path: "steam-course",
      component: _3affbced,
      name: "index-steam-course___en"
    }, {
      path: "storytelling-course",
      component: _543dc566,
      name: "index-storytelling-course___en"
    }, {
      path: "toeic",
      component: _3e357aa5,
      name: "index-toeic___en"
    }, {
      path: "transition-course",
      component: _19bda294,
      name: "index-transition-course___en"
    }, {
      path: "news/abc",
      component: _2476a3d8,
      name: "index-news-abc___en"
    }, {
      path: "hall-of-fame/:id?",
      component: _508cbe92,
      name: "index-hall-of-fame-id___en"
    }, {
      path: "news/:id",
      component: _72ab9da0,
      name: "index-news-id___en"
    }]
  }, {
    path: "/gmail-form",
    component: _31e7a528,
    name: "gmail-form___vi"
  }, {
    path: "/login",
    component: _3b88bde4,
    name: "login___vi"
  }, {
    path: "/en/admin-uni",
    component: _27c49426,
    name: "admin-uni___en"
  }, {
    path: "/en/gmail-form",
    component: _31e7a528,
    name: "gmail-form___en"
  }, {
    path: "/en/login",
    component: _3b88bde4,
    name: "login___en"
  }, {
    path: "/",
    component: _71e11acd,
    children: [{
      path: "",
      component: _d160d8e0,
      name: "index___vi"
    }, {
      path: "about",
      component: _a96989e4,
      name: "index-about___vi"
    }, {
      path: "grammar-course",
      component: _6a3400f6,
      name: "index-grammar-course___vi"
    }, {
      path: "hall-of-fame",
      component: _df7f4cac,
      name: "index-hall-of-fame___vi"
    }, {
      path: "ielts",
      component: _90bf0360,
      name: "index-ielts___vi"
    }, {
      path: "kindergarten-course",
      component: _76d0647a,
      name: "index-kindergarten-course___vi"
    }, {
      path: "news",
      component: _1668c670,
      name: "index-news___vi"
    }, {
      path: "online-testing",
      component: _2254ca4b,
      name: "index-online-testing___vi"
    }, {
      path: "presentation-course",
      component: _24c6e1ef,
      name: "index-presentation-course___vi"
    }, {
      path: "primary-course",
      component: _b1b1080a,
      name: "index-primary-course___vi"
    }, {
      path: "secondary-course",
      component: _786be76e,
      name: "index-secondary-course___vi"
    }, {
      path: "steam-course",
      component: _3affbced,
      name: "index-steam-course___vi"
    }, {
      path: "storytelling-course",
      component: _543dc566,
      name: "index-storytelling-course___vi"
    }, {
      path: "toeic",
      component: _3e357aa5,
      name: "index-toeic___vi"
    }, {
      path: "transition-course",
      component: _19bda294,
      name: "index-transition-course___vi"
    }, {
      path: "news/abc",
      component: _2476a3d8,
      name: "index-news-abc___vi"
    }, {
      path: "hall-of-fame/:id?",
      component: _508cbe92,
      name: "index-hall-of-fame-id___vi"
    }, {
      path: "news/:id",
      component: _72ab9da0,
      name: "index-news-id___vi"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
