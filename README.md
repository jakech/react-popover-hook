# react-popover-hook

## Usage

```tsx
const App = () => {
    const [open, trigger, content] = usePopover<
        HTMLButtonElement,
        HTMLDivElement
    >()
    return (
        <div>
            <button {...trigger}>Trigger</button>
            {open && <div {...content}>Popover content</div>}
        </div>
    )
}
```
