<template>
  <v-row justify="center">
    <v-dialog v-model="setModal" persistent width="600px">
      <v-card>
        <v-card-title v-if="modalHeader === 'tos'">
          <span class="headline"> tos 제목 </span>
        </v-card-title>
        <v-card-title v-else>
          <span class="headline"> pp 제목 </span>
        </v-card-title>
        <v-card-text v-if="modalHeader === 'tos'">
          tos 유저
        </v-card-text>
        <v-card-text v-else>
          pp 유저
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="close">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text @click="close">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api';

export default {
  name: 'common-modal',
  props: {
    setModal: {
      default: false,
    },
    modalHeader: {
      default: '',
    },
  },
  setup(props, { emit }) {
    let openModalCheck = reactive({ props });
    const close = () => {
      return emit('setModal', openModalCheck.setModal);
    };
    return { close, openModalCheck };
  },
};
</script>

<style scoped></style>
