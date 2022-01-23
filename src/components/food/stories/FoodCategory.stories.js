import FoodCategory from '../FoodCategory.vue';

export default {
    title: 'Food/FoodCategory',
    component: {FoodCategory}
}

const Template = (_, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {FoodCategory},
    template: '<div style="width:375px"><FoodCategory v-bind="$props" :ranking="ranking"/></div>',
})

export const Default = Template.bind({});
Default.args = {}