//notificationCode 0:실패 1:성공
export const state = () => ({
  notificationOption: {
    notification: false,
    notificationCode: 1,
    notificationContent: '회원가입',
  },
});

export const mutations = {
  setNotificationOption(state, notificationOption) {
    state.notificationOption = notificationOption;
  },
};

export const actions = {
  setNotificationOption: ({ commit }, notificationOption) => {
    commit('setNotificationOption', notificationOption);
  },
};
export const strict = false;
