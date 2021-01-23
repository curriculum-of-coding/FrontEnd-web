import Vue from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faThumbsUp,
  faThumbsDown,
  faChevronRight,
  faChevronLeft,
  faPlay,
  faHeart,
  faHome,
  faBookOpen,
  faChalkboard,
} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(
  faThumbsUp,
  faThumbsDown,
  faChevronRight,
  faChevronLeft,
  faPlay,
  faHeart,
  faHome,
  farThumbsUp,
  faBookOpen,
  faChalkboard,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

