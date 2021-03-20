export const state = () => ({
  notification: true,
  notificationCode: 1,
  notificationContent: '회원가입',
});

export const mutations = {
  setNotificationStatus(state, notification) {
    state.notification = notification;
  },
  setNotificationCode(state, notificationCode) {
    state.notification = notificationCode;
  },
  setNotificationContent(state, notificationContent) {
    state.notificationContent = notificationContent;
  },
};

export const actions = {
  setNotificationStatus: ({ commit }, notification) => {
    commit('setNotificationStatus', notification);
  },
  setNotificationCode: ({ commit }, notificationCode) => {
    commit('setNotificationCode', notificationCode);
  },
  setNotificationContent: ({ commit }, notificationContent) => {
    commit('setNotificationContent', notificationContent);
  },
};
export const strict = false;
