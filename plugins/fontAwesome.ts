import Vue from 'vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faThumbsUp,
  faThumbsDown,
  faChevronRight,
  faChevronLeft,
  faPlay,
  faHeart,
  faHome,
  faTimes,
  faBookOpen,
  faChalkboard,
  faCommentDots,
  faSearch,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faCheck

} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faThumbsUp,
  faThumbsDown,
  faChevronRight,
  faChevronLeft,
  faPlay,
  faHeart,
  faHome,
  faTimes,
  farThumbsUp,
  faBookOpen,
  faChalkboard,
  faCommentDots,
  faSearch,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
  faCheck
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
