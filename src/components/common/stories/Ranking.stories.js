import Ranking from '../Ranking.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  title: 'Common/Ranking',
  component: { Ranking },
};

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Ranking },
  template: '<div style="width:370px"><Ranking v-bind="$props"></div>',
  router: new VueRouter(),
});

export const Default = Template.bind({});
Default.args = {
  ranking: [
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/164117925060140_tendong.jpg',
      likeCnt: 7,
      rank: 1,
      title: '텐동(튀김덮밥)',
      variance: 0,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/164117879305614_Butadong.jpg',
      likeCnt: 7,
      rank: 2,
      title: '부타동(돼지덮밥)',
      variance: 1,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/164117712404013_Burrito.jpg',
      likeCnt: 7,
      rank: 3,
      title: '브리또',
      variance: 0,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/1641176361180korean_01_soy%20sauce%20crab.jpg',
      likeCnt: 7,
      rank: 4,
      title: '간장게장',
      variance: 1,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/1641176361180korean_01_soy%20sauce%20crab.jpg',
      likeCnt: 7,
      rank: 5,
      title: '간장게장',
      variance: -1,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/1641176361180korean_01_soy%20sauce%20crab.jpg',
      likeCnt: 7,
      rank: 6,
      title: '간장게장',
      variance: 0,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/1641176361180korean_01_soy%20sauce%20crab.jpg',
      likeCnt: 7,
      rank: 7,
      title: '간장게장',
      variance: 0,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/1641176361180korean_01_soy%20sauce%20crab.jpg',
      likeCnt: 7,
      rank: 8,
      title: '간장게장',
      variance: 0,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/1641176361180korean_01_soy%20sauce%20crab.jpg',
      likeCnt: 7,
      rank: 9,
      title: '간장게장',
      variance: 0,
    },
    {
      imgUrl:
        'https://project-sasohae.s3.ap-northeast-2.amazonaws.com/original/1641176361180korean_01_soy%20sauce%20crab.jpg',
      likeCnt: 7,
      rank: 10,
      title: '간장게장',
      variance: 0,
    },
  ],
};
