export const state = () => ({
  signupStatus: false,
});

export const mutations = {
  setSignupStatus(state, signupStatus) {
    state.signupStatus = signupStatus;
  },
};

export const actions = {
  setSignupStatus: ({ commit }, signupStatus) => {
    console.log(signupStatus);
    commit('setSignupStatus', signupStatus);
  },
};
export const strict = false;
