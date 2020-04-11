<template>
    <div :class="buttonClass" @click="myClick($event)">
        <slot>My button</slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component
    export default class MyButton extends Vue {
        @Prop({ default: () => 'primary'}) private color!: string;
        @Prop({ default: () => false}) private disabled!: boolean;

        get buttonClass() {
            return {
                'Button': true,
                [`Button__${this.color}`]: true,
                'Button__disabled': this.disabled,
            }
        }

        myClick($event: any) {
            if (this.disabled) return;
            $event.target.dispatchEvent(
                new CustomEvent("my-click", {
                        composed: true,
                        bubbles: true
                    }
                ));
        }
    }
</script>

<style scoped lang="scss">
    .Button {
        font-family: Arial,serif;
        padding: 0.7em 1.2em;
        margin: 0;
        color: white;
        text-transform: uppercase;
        font-size: 1em;
        font-weight: bold;
        line-height: 1.5em;
        border-radius: 0.3em;
        text-align: center;
        max-width: 6em;
        cursor: pointer;

        &__primary {
            background-color: deepskyblue;
        }
        &__secondary {
            background-color: mediumblue;
        }
        &__disabled {
            cursor: default;
            background-color: #c9c9c9;
        }
    }
</style>