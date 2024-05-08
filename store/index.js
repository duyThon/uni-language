export const state = () => ({
  language: 'vi' // Default language
});

export const mutations = {
  setLanguage(state, language) {
    state.language = language;
  }
};