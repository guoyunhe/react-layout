# ColumnLayout

## Default

```jsx filename="Default"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout>
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</ColumnLayout>;
```

## Gap/Spacing

```jsx filename="Gap in pixels"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout gap={20}>
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</ColumnLayout>;
```

```jsx filename="Gap in other units"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout gap="2rem">
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</ColumnLayout>;
```

## Horizontal align

```jsx filename="Horizontal align left/start"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout align="flex-start">
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</ColumnLayout>;
```

```jsx filename="Horizontal align right/end"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout align="flex-end">
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</ColumnLayout>;
```

```jsx filename="Horizontal stretch"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout align="stretch">
  <button style={{ fontSize: 12 }}>Small button</button>
  <button style={{ fontSize: 16 }}>Medium button</button>
  <button style={{ fontSize: 20 }}>Large button</button>
</ColumnLayout>;
```
