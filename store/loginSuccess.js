export const state = () => ({
  loginStatus: false,
  loginToken: '',
  userInfo: {},
});

export const mutations = {
  setLoginStatus(state, loginStatus) {
    state.loginStatus = loginStatus;
  },
  setLoginToken(state, loginToken) {
    state.loginToken = loginToken;
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  },
};

export const actions = {
  setSignupStatus: ({ commit }, signupStatus) => {
    commit('setSignupStatus', signupStatus);
  },
  setLoginToken: ({ commit }, loginToken) => {
    commit('setLoginToken', loginToken);
  },
  setUserInfo: ({ commit }, userInfo) => {
    commit('setUserInfo', userInfo);
  },
};
export const strict = false;
