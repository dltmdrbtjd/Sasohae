import DefaultQuestion from '../DefaultQuestion.vue';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
    title: 'Gift/DefaultQuestion',
    component: {DefaultQuestion}
}

const Template = (_, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {DefaultQuestion},
    data() {
        return {
            questions:[
                {
                  question: '누구에게 선물하나요?',
                  list: [
                    '부모님',
                    '친구',
                    '연인',
                    '선생님',
                    '교수님',
                    '직장동료',
                    '선후배',
                    '구연인',
                    '기타',
                  ],
                },
                {
                  question: '어떤 목적의 선물인가요?',
                  list: [
                    '생일',
                    '연인기념일',
                    '결혼기념일',
                    '합격',
                    '입학',
                    '졸업',
                    '집들이',
                    '명절',
                    '하찮은 선물',
                  ],
                },
                {
                  question: '성별을 선택해주세요.',
                  list: ['남자', '여자'],
                },
                {
                  question: '연령대를 선택해주세요.',
                  list: ['20대', '30대', '40대', '50대', '60대', '그 외'],
                },
                {
                  question: '지갑이 여유로우신가요?',
                  list: ['네', '아니오', '잘 모르겠어요.'],
                },
              ]
        }
    },
    template: '<DefaultQuestion v-bind="$props" :questions="questions" :pageNum="pageNum"/>',
    computed: {
        pageNum() {
            return 1
        }
    },
    store: new Vuex.Store({
        modules: {
            gift: {
                namespaced: true,
                state: {
                    pageNum: 1,
                },
                getters: {
                    currrentPageNum(state) {
                        return state.pageNum
                    }
                }
            }
        }
    })
})

export const Default = Template.bind({});
Default.args = {}