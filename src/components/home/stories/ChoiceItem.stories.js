import ChoiceItem from '../ChoiceItem.vue';
import money from '@/assets/money.png';

export default {
    title: 'Home/ChoiceItem',
    component: {ChoiceItem}
}

const Template = (_, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {ChoiceItem},
    template: '<ChoiceItem v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
    item: {
        title1: 'hello',
        title2: 'hi',
        image: money
    }
}