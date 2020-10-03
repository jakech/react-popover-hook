import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { usePopover } from '../src/index'

const Demo = () => {
    const [open, trigger, content] = usePopover<
        HTMLButtonElement,
        HTMLDivElement
    >()

    return (
        <div>
            <button {...trigger}>open</button>
            {open && <div {...content}>I am in the popover content</div>}
        </div>
    )
}

export default {
    title: 'Example/usePopover',
    component: Demo,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} as Meta

const Template: Story = (args) => <Demo {...args} />

export const Default = Template.bind({})
