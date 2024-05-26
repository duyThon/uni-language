export const state = () => ({
  language: 'vi',
});

export const mutations = {
  setLanguage(state, language) {
    state.language = language;
  }
};