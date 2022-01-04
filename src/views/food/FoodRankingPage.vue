<template>
  <div>
    <Ranking :ranking="ranking" />
  </div>
</template>
<script>
import Ranking from '@/components/common/Ranking.vue';
export default {
  components: { Ranking },
  data() {
    return {
      ranking: [],
    };
  },
  mounted() {
    this.getMenuRanking();
  },
  methods: {
    async getMenuRanking() {
      try {
        const resp = await this.$http.get('/menu/ranking');
        this.ranking = resp.data;
      } catch (e) {
        throw Error(e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
