import Splash from '../Splash.vue';

export default {
    title: 'Home/Spalsh',
    component: {Splash}
}

const Template = (_, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {Splash},
    template: '<Splash style="width:360px; height:100vh;" v-bind="$props" />'
})

export const Default = Template.bind({});
Default.args = {}