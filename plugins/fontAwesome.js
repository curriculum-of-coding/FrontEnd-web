import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faThumbsUp ,faThumbsDown,faChevronRight,faPlay,faHeart} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faThumbsUp,faThumbsDown,faChevronRight,faPlay,faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

