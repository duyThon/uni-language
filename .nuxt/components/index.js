export const SsrCarousel = () => import('../../node_modules/vue-ssr-carousel/index.js' /* webpackChunkName: "components/ssr-carousel" */).then(c => wrapFunctional(c.default || c))
export const CommonBannerForm = () => import('../../components/common/BannerForm.vue' /* webpackChunkName: "components/common-banner-form" */).then(c => wrapFunctional(c.default || c))
export const CommonComitmentTraining = () => import('../../components/common/ComitmentTraining.vue' /* webpackChunkName: "components/common-comitment-training" */).then(c => wrapFunctional(c.default || c))
export const CommonFooter = () => import('../../components/common/Footer.vue' /* webpackChunkName: "components/common-footer" */).then(c => wrapFunctional(c.default || c))
export const CommonLightGallery = () => import('../../components/common/LightGallery.vue' /* webpackChunkName: "components/common-light-gallery" */).then(c => wrapFunctional(c.default || c))
export const CommonMainNavBar = () => import('../../components/common/MainNavBar.vue' /* webpackChunkName: "components/common-main-nav-bar" */).then(c => wrapFunctional(c.default || c))
export const CommonMaps = () => import('../../components/common/Maps.vue' /* webpackChunkName: "components/common-maps" */).then(c => wrapFunctional(c.default || c))
export const CommonMessengerPlugin = () => import('../../components/common/MessengerPlugin.vue' /* webpackChunkName: "components/common-messenger-plugin" */).then(c => wrapFunctional(c.default || c))
export const CommonOtherCourseSection = () => import('../../components/common/OtherCourseSection.vue' /* webpackChunkName: "components/common-other-course-section" */).then(c => wrapFunctional(c.default || c))
export const CommonParentsComment = () => import('../../components/common/ParentsComment.vue' /* webpackChunkName: "components/common-parents-comment" */).then(c => wrapFunctional(c.default || c))
export const CommonPartnersCarousel = () => import('../../components/common/PartnersCarousel.vue' /* webpackChunkName: "components/common-partners-carousel" */).then(c => wrapFunctional(c.default || c))
export const CommonStickyInfoContact = () => import('../../components/common/StickyInfoContact.vue' /* webpackChunkName: "components/common-sticky-info-contact" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
