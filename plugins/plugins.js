import Vue from 'vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueCompositionApi from '@vue/composition-api'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThumbsUp ,faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faThumbsUp,faThumbsDown)

//VueLodash
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })

//VueCompositionApi
Vue.use(VueCompositionApi)

//font-awesome-icon
Vue.component('font-awesome-icon', FontAwesomeIcon)


