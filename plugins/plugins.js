import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(VueCompositionApi)


