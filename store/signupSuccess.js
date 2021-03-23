export const state = () => ({
  signupStatus: false,
  signupEmail: '',
});

export const mutations = {
  setSignupStatus(state, signupStatus) {
    state.signupStatus = signupStatus;
  },
  setSignupEmail(state, signupEmail) {
    state.signupEmail = signupEmail;
  },
};

export const actions = {
  setSignupStatus: ({ commit }, signupStatus) => {
    commit('setSignupStatus', signupStatus);
  },
  setSignupEmail: ({ commit }, signupEmail) => {
    commit('setSignupEmail', signupEmail);
  },
};
export const strict = false;
