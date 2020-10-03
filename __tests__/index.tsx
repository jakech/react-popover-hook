import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { usePopover } from '../src/index'

const Demo = ({ defaultOpen = false }) => {
    const [open, trigger, content] = usePopover<
        HTMLButtonElement,
        HTMLDivElement
    >(defaultOpen)

    return (
        <div>
            <button {...trigger} data-testid="trigger">
                open
            </button>
            {open && (
                <div {...content} data-testid="content">
                    I am in the popover content
                </div>
            )}
        </div>
    )
}

test('content should not be open by default', () => {
    render(<Demo />)

    expect(screen.getByTestId('trigger')).toBeInTheDocument()
    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
})

test('should toggle content when trigger is clicked', () => {
    render(<Demo />)

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()

    const $trigger = screen.getByTestId('trigger')
    fireEvent.click($trigger)

    expect(screen.getByTestId('content')).toBeInTheDocument()

    fireEvent.click($trigger)

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
})

test('pressing ESC should close the popover', () => {
    render(<Demo defaultOpen />)

    expect(screen.getByTestId('content')).toBeInTheDocument()

    fireEvent.keyUp(document, { key: 'Escape', code: 'Escape' })

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
})

test('clicking outside of trigger and content should close the popover', () => {
    render(
        <div>
            <Demo defaultOpen />
            <div data-testid="outside"></div>
        </div>
    )

    expect(screen.getByTestId('content')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('outside'))

    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
})
