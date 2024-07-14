# RowLayout

## Default

Default gap is 8px. Default alignment is left in horizontal and center in vertical.

```jsx filename="Default"
import { RowLayout } from '@guoyunhe/react-layout';

<RowLayout>
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</RowLayout>;
```

## Gap/Spacing

```jsx filename="Gap in pixels"
import { RowLayout } from '@guoyunhe/react-layout';

<RowLayout gap={20}>
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</RowLayout>;
```

```jsx filename="Gap in other units"
import { RowLayout } from '@guoyunhe/react-layout';

<RowLayout gap="2rem">
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</RowLayout>;
```

## Wrap

```jsx filename="Wrap"
import { RowLayout } from '@guoyunhe/react-layout';

<div style={{ maxWidth: 300 }}>
  <RowLayout wrap>
    <button style={{ fontSize: 12 }}>Small button</button>
    <button style={{ fontSize: 16 }}>Medium button</button>
    <button style={{ fontSize: 20 }}>Large button</button>
  </RowLayout>
</div>;
```

## Inline

```jsx filename="Inline"
import { RowLayout } from '@guoyunhe/react-layout';

<div>
  <RowLayout inline>
    <button style={{ fontSize: 12 }}>Small button</button>
    <button style={{ fontSize: 16 }}>Medium button</button>
    <button style={{ fontSize: 20 }}>Large button</button>
  </RowLayout>
  &nbsp;
  <span>Other stuff...</span>
</div>;
```
