<script>
export default {
  methods: {
    sendKaKaoLink() {
      this.$kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '사회초년생의 소소한 고민',
          description: '사.소.해',
          imageUrl:
            'https://s3.ap-northeast-2.amazonaws.com/sasohae.com/img/character+brand.png',
          link: {
            webUrl: 'https://sasohae.com',
            mobileWebUrl: 'https://sasohae.com',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://sasohae.com',
              webUrl: 'https://sasohae.com',
            },
          },
        ],
      });
    },
  },
};
</script>
