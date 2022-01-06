<template>
  <div id="app">
    <div id="view">
      <GoBackButton v-if="isPageCheck" @click.native="goBack" />
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeSpQbQGZPT5qSGNikADbT08gKCYm2BQGT57iKzzUgoJOxOnA/viewform"
        class="report"
        target="_blank"
        v-if="!isPageCheck"
        >설문조사하고 선물받기<span></span
      ></a>
      <router-view />
    </div>
    <div class="share-btn">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeSpQbQGZPT5qSGNikADbT08gKCYm2BQGT57iKzzUgoJOxOnA/viewform"
        target="_blank"
        >설문조사하고 선물받기<span></span
      ></a>
      <a @click="sendKaKaoLink">친구에게 공유하기<span class="share"></span></a>
    </div>
  </div>
</template>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>
import GoBackButton from '@/components/common/goBackArrow.vue';
export default {
  components: { GoBackButton },
  computed: {
    isPageCheck() {
      if (this.$route.path === '/') {
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.visitedCheck();
  },
  methods: {
    goBack() {
      if (
        this.$route.path === '/gift-choice' &&
        this.$store.state.gift.pageNum !== 0
      ) {
        this.$store.commit('changePageNum', -1);
        return;
      }
      this.$router.go(-1);
    },
    async visitedCheck() {
      const visitDate = localStorage.getItem('visitDate');
      if (visitDate !== this.$todayDate() || !visitDate) {
        localStorage.setItem('visitDate', this.$todayDate());
        await this.$http.put('/main');
      }
    },
    sendKaKaoLink() {
      this.$kakao.Link.sendDefault({
        // templateId: '68260',
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
<style lang="scss">
@media (min-width: 600px) {
  #view {
    position: relative;
    top: 0;
    left: 15%;
    max-width: 375px;
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background: {
      color: $sub-color;
    }
  }
  #app {
    font-family: $body-font-family;
    width: 100%;
    height: 100%;
    background: {
      image: url('./assets/bgImage.png');
      size: cover;
    }
  }
}

@media (max-width: 500px) {
  #view {
    position: relative;
    top: 0;
    left: 0;
    max-width: 375px;
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background: {
      color: $sub-color;
    }
  }
  #app {
    font-family: $body-font-family;
  }
}

@media (min-width: 1812px) {
  .share-btn {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 5%;
    right: 5%;
    > a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 4px 4px 4px 6px rgba(0, 0, 0, 0.1);
      width: 353px;
      height: 69px;
      border-radius: 30px;
      border: 3px solid $main-color;
      cursor: pointer;
      background: {
        color: $sub-color;
      }
      font-size: 21px;
      font-weight: $font-bold;
      color: $main-color;

      > span {
        display: block;
        width: 30px;
        height: 30px;
        margin-left: 10px;
        background: {
          image: url('./assets/reportIcon.png');
          size: contain;
          repeat: no-repeat;
        }
      }

      .share {
        background: {
          image: url('./assets/shareIcon.png') !important;
        }
      }

      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
}

.report {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-decoration: none;
  font-size: 13px;
  font-weight: $font-bold;
  top: 1.5%;
  right: 5%;
  width: 60%;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: $sub-color;
  color: $main-color;
  cursor: pointer;

  > span {
    display: block;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    background: {
      image: url('./assets/reportIcon.png');
      size: contain;
      repeat: no-repeat;
    }
  }
}
</style>
