import "./dist/my-button.js";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

export default {
    title: 'My Button',
    decorators: [withKnobs]
};

export const primary = () => ({
    template: `
    <my-button @my-click="log" :color="color" :disabled="disabled">{{text}}</my-button>
    `,
    props: {
        text: {
            default: text('Text', 'My button')
        },
        color: {
            default: select('color', {primary: 'primary', secondary: 'secondary' }, 'primary')
        },
        disabled: {
            default: boolean('disabled', false)
        }
    },
    methods: {
        log:  action('my-click'),
    }
})

export const secondary = () => ({
    template: `
    <my-button @my-click="log" :color="color" :disabled="disabled">{{text}}</my-button>
    `,
    props: {
        text: {
            default: text('Text', 'My button')
        },
        color: {
            default: select('color', {primary: 'primary', secondary: 'secondary' }, 'secondary')
        },
        disabled: {
            default: boolean('disabled', false)
        }
    },
    methods: {
        log:  action('my-click'),
    }
})

export const disabled = () => ({
    template: `
    <my-button @my-click="log" :color="color" :disabled="disabled">{{text}}</my-button>
    `,
    props: {
        text: {
            default: text('Text', 'My button')
        },
        color: {
            default: select('color', {primary: 'primary', secondary: 'secondary' }, 'primary')
        },
        disabled: {
            default: boolean('disabled', true)
        }
    },
    methods: {
        log:  action('my-click'),
    }
})