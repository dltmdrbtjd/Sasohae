import OXButton from '../OXButton.vue';

export default {
    title: 'Gift/OXButton',
    component: {OXButton}
}

const Template = (_,{argTypes}) => ({
    props: Object.keys(argTypes),
    components: {OXButton},
    template: '<div style="width:360px"><OXButton v-bind="$props" /></div>'
})

export const Default = Template.bind({});
Default.args = {
    title: '1'
}