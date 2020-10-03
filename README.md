# react-popover-hook

-   No extraneous DOM, gives you complete style control
-   Ultra lightweight 1.45 kB (gzip)
-   Good a11y supports
-   TypeScript

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

## `usePopover(defaultOpen?: boolean)`

```js
const [open, trigger, content] = usePopover(false)
```

`usePopover` takes a `boolean` for it's default open/close state.

The return value is an array with 3 items. Like the `useState` build-in hook, this allow you to name these items per your usecase.

For demo purpose we will name and refer to these items as `open`, `trigger` and `content`.

## `open`

`boolean` value indicating the open/close state of the popover

## `trigger`

An object containing the props for the trigger Component. it can be directly spreaded on the Component being used as trigger of the popover.

```tsx
<button {...trigger}></button>
```

### `trigger.ref`

### `trigger.onClick()`

Toggle the popover open/close state.

### `trigger['aria-haspopup']`

### `trigger['aria-expanded']`

## `content`

An object containing the props for the Component that contains the popover's content. it can be directly spreaded on the Component that contains the popover's content.

```tsx
<div {...content}></div>
```

### `content.ref`

### `content.role`

### `content.style`
