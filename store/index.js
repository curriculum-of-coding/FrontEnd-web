export const state = () => ({
	menuTitle: {
		name: '커리큘럼',
		subTitle: '이런 강의는 어떠신가요? 현직자들이 추천하는 커리큘럼입니다.',
	},
});

export const mutations = {
	setMenuTitle(state, menuTitle) {
		state.menuTitle = menuTitle;
	},
};
