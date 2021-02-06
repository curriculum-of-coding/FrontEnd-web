import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import VueCompositionApi from '@vue/composition-api';

//VueLodash
Vue.use(VueLodash, { name: 'custom', lodash: lodash });

//VueCompositionApi
Vue.use(VueCompositionApi);
