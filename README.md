![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-popover-hook)

# react-popover-hook

-   No extraneous DOM, gives you complete style control
-   Ultra lightweight [~ 1 kB (gzip)](https://bundlephobia.com/result?p=react-popover-hook)
-   Good a11y support
-   TypeScript

## Usage

```jsx
const App = () => {
    const [open, trigger, content] = usePopover(false)
    return (
        <div>
            <button {...trigger}>Trigger</button>
            {open && <div {...content}>Popover content</div>}
        </div>
    )
}
```

## API

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

```jsx
<button {...trigger}>Click to open</button>
```

| key             | type        | desc                                                           |
| --------------- | ----------- | -------------------------------------------------------------- |
| `ref`           | `React.Ref` | **! important !** attached this `ref` to the trigger component |
| `onClick`       | `function`  | toggle the popover open/close state.                           |
| `aria-haspopup` | `string`    | value set to `dialog`                                          |
| `aria-expanded` | `boolean`   | reflect the open and close state of popover                    |

**! important !** popover content position will be calculated by using the trigger position.

## `content`

An object containing the props for the Component that contains the popover's content. it can be directly spreaded on the Component that contains the popover's content.

```jsx
<div {...content}>
    <p>Whatever content</p>
</div>
```

| key     | type            | desc                                                           |
| ------- | --------------- | -------------------------------------------------------------- |
| `ref`   | `React.Ref`     | **! important !** attached this `ref` to the content component |
| `role`  | `string`        | value set to `dialog`                                          |
| `style` | `CSSProperties` | style object                                                   |

**! important !** popover content position will be calculated by using the trigger position.
