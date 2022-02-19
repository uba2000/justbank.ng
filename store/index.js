export const state = () => ({
  isCookieBoxOpen: true,
})

export const getters = {
  isCookieToggled: (state) => state.isCookieBoxOpen,
}

export const mutations = {
  toggleCookieBox(state) {
    state.isCookieBoxOpen = !state.isCookieBoxOpen;
  }
}

export const actions = {
  toggleCookieBox({ commit }) {
    commit("toggleCookieBox");
  }
}

export const strict = false;