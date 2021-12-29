import money from '@/assets/money.png';
import food from '@/assets/food.png';
import gift from '@/assets/gift.png';
import worry from '@/assets/worry.png';

const state = {
  checkList: [
    {
      keys: 1,
      name: 'gift',
      image: gift,
      title1: '친구 선물',
      title2: '이거 어때요?',
    },
    {
      keys: 2,
      name: 'food',
      image: food,
      title1: '오늘 점심은',
      title2: '이게 좋아요!',
    },
    {
      keys: 3,
      name: 'money',
      image: money,
      title1: '축의금은',
      title2: '이정도 내세요.',
    },
    {
      keys: 4,
      name: 'worry',
      image: worry,
      title1: '고민을',
      title2: '공유해요.',
    },
  ],
};

export default {
  state,
};
