import Spinner from '../Spinner.vue';

export default {
    title: 'Common/Spinner',
    component: {Spinner}
}

const Template = (_, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {Spinner},
    template: '<Spinner v-bind="$props"/>'
})

export const Default = Template.bind({})
Default.args = {}