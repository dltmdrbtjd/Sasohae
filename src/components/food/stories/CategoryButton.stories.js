import CategoryButton from '../CategoryButton.vue';

export default {
    title: 'Food/CategoryButton',
    component: {CategoryButton}
}

const Template = (_, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {CategoryButton},
    template: '<div style="width:300px"><CategoryButton v-bind="$props" /></div>'
})

export const Purpose = Template.bind({});
Purpose.args = {
    category: {
        list: ['식사', '요리', '간식'],
        title: '목적',
    }
}

export const Type = Template.bind({});
Type.args = {
    category: {
        list: ['전체', '한식', '중식', '일식', '양식', '아시아'],
        title: '종류',
    }
}

export const Who = Template.bind({});
Who.args = {
    category: {
        list: ['아무나', '혼밥', '친구', '연인', '가족', '동료'],
        title: '누구랑?',
    }
}