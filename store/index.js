export const state = () => ({
    locale: 'vi',
  });
  
  export const mutations = {
    setLocale(state, locale) {
      state.locale = locale;
    },
  };