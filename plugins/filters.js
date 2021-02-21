import Vue from 'vue';
import moment from 'moment';

const ctgNm = (value, codeMap) => {
	return codeMap[value] || '';
};
const getCatg = (value, catCodesMap) => {
	return catCodesMap[value] || '';
};

const dateFormat = (value, format) => {
	return moment(value).format(format);
};
const userGrade = value => {
	return value.trim() == '1' ? '슈퍼관리자' : '일반사용자';
};
const timeFormat = time => {
	const hour = time.slice(0, 2);
	const min = time.slice(2, 4);
	const sec = time.slice(4, 6);
	return `${hour}시 ${min}분 ${sec}초`;
};

Vue.filter('dateFormat', dateFormat);
Vue.filter('timeFormat', timeFormat);
Vue.filter('ctgNm', ctgNm);
Vue.filter('getCatg', getCatg);
Vue.filter('userGrade', userGrade);
