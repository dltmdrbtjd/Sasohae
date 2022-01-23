import ChoiceList from '../ChoiceList.vue';

export default {
    title: 'Gift/ChoiceList',
    component: {ChoiceList}
}

const Template = (_, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {ChoiceList},
    template: '<ChoiceList v-bind="$props" />'
})

export const Default = Template.bind({});
Default.args = {
    title: '여자친구'
}