# RowLayout

## Default

```jsx filename="Default"
import { Button, RowLayout } from '@guoyunhe/react-layout';

<RowLayout>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</RowLayout>;
```

## Gap/Spacing

```jsx filename="Gap in pixels"
import { Button, RowLayout } from '@guoyunhe/react-layout';

<RowLayout gap={20}>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</RowLayout>;
```

```jsx filename="Gap in other units"
import { Button, RowLayout } from '@guoyunhe/react-layout';

<RowLayout gap="2rem">
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</RowLayout>;
```

## Wrap

```jsx filename="Wrap"
import { Button, RowLayout } from '@guoyunhe/react-layout';

<div style={{ maxWidth: 300 }}>
  <RowLayout wrap>
    <Button size="small">Small Button</Button>
    <Button size="medium">Medium Button</Button>
    <Button size="large">Large Button</Button>
  </RowLayout>
</div>;
```

## Inline

```jsx filename="Inline"
import { Button, RowLayout } from '@guoyunhe/react-layout';

<div>
  <RowLayout inline>
    <Button size="small">Small Button</Button>
    <Button size="medium">Medium Button</Button>
    <Button size="large">Large Button</Button>
  </RowLayout>
  &nbsp;
  <span>Other stuff...</span>
</div>;
```
