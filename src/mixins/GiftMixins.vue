<script>
export default {
  methods: {
    giftAnswer(key, answer) {
      if (answer === '네') {
        answer = 'T';
      } else if (answer === '아니오') {
        answer = 'F';
      } else if (answer === '잘 모르겠어요.') {
        answer = '*';
      }
      const request = {
        key,
        answer,
      };
      this.$store.commit('addGiftAnswer', request);
    },
  },
};
</script>
