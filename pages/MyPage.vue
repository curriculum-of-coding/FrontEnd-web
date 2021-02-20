<template>
  <div>
    <AccountSyncCard
      account-type="Github"
      description="Github 계정을 연동하시면 현직 개발자 인증을 받으실 수 있습니다."
      sync-account="account"
    />
    <AccountSyncCard
      account-type="Google"
      description="Google 계정을 연동하시면 이미 시청한 강의를 확인하실 수 있습니다."
    />
    <SearchInput />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AccountSyncCard from '../components/cards/AccountSyncCard.vue';
import SearchInput from '../components/inputs/SearchInput.vue';

export default Vue.extend({
  components: {
    AccountSyncCard,
    SearchInput,
  },
});
</script>

<style lang="scss" scoped></style>
