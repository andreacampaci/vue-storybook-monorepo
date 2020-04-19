import { shallowMount, Wrapper } from '@vue/test-utils'
import Button from '@/Button.vue'

describe('Button', () => {
    let wrapper: Wrapper<Button>;
    let wrapperVm: any;
    let myClickSpy: any;
    let eventEmitSpy: any;
        // Now mount the component and you have the wrapper
    beforeEach(() => {
        wrapper = shallowMount(Button, {
            propsData: {
                color: 'primary',
                disabled: false,
            },
            slots: {
                default: '<strong id="mockSlot">test</strong>',
                //fooBar: FooBar, // Will match <slot name="FooBar" />,
                //foo: '<div />'
            }
        });
        wrapperVm = wrapper.vm;
        myClickSpy = jest.spyOn(wrapperVm, 'myClick');
        eventEmitSpy = jest.spyOn(wrapperVm, 'eventEmit');
    });

    it('should be color as default', () => {
        expect(wrapperVm.color).toBe('primary')
    })

    it('should be disabled as default', () => {
        expect(wrapperVm.disabled).toBeFalsy()
    })

    it('should be disabled change if different prop passed', () => {
        wrapper.setProps({ disabled: true });
        expect(wrapperVm.disabled).toBeTruthy()
    })

    it('should slot contains test', () => {
        expect(wrapper.contains('#mockSlot')).toBeTruthy()
    })

    it('should be event call when button is click', () => {
        wrapper.setProps({ disabled: false });
        const button = wrapper.find('.Button');
        button.trigger('click');
        expect(myClickSpy).toHaveBeenCalled();
        expect(eventEmitSpy).toHaveBeenCalled();
    })

    it('should be event not call when button is click if it is disabled', () => {
        wrapper.setProps({ disabled: true });
        const button = wrapper.find('.Button');
        button.trigger('click');
        expect(myClickSpy).toHaveBeenCalled();
        expect(eventEmitSpy).not.toHaveBeenCalled();
    })

})