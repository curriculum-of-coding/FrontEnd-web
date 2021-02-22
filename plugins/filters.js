import Vue from 'vue';
import moment from 'moment';

const dateFormat = (value, format) => {
  return moment(value).format(format);
};

const timeFormat = time => {
  const hour = time.slice(0, 2);
  const min = time.slice(2, 4);
  const sec = time.slice(4, 6);
  return `${hour}시 ${min}분 ${sec}초`;
};

Vue.filter('dateFormat', dateFormat);
Vue.filter('timeFormat', timeFormat);
