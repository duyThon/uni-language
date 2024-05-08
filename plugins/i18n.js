import Vue from 'vue';
import i18next from "i18next";
import I18NextVue from "i18next-vue";

Vue.use(I18NextVue, { i18next });

i18next.init({
  resources : {
    en: {
      translation: {
        // English translations here
      }
    },
    vi: {
      translation: {
        // French translations here
      }
    }
  }
})

i18next.init({
  resources: {
		en: {
			// language
			translation: {
				// the default namespace
				hello: "hello",
			},
		},
		vi: {
			// language
			translation: {
				// the default namespace
				hello: "in chao",
			},
		},
	},
  lng: 'vi', // default language
  fallbackLng: 'vi', // fallback language
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
