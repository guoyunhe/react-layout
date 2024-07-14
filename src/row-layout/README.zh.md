# RowLayout 行布局

## 默认

```jsx filename="Default"
import { Button, RowLayout } from '@guoyunhe/react-layout';

<RowLayout>
  <Button size="small">Small Button</Button>
  <Button size="medium">Medium Button</Button>
  <Button size="large">Large Button</Button>
</RowLayout>;
```

## 间距

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

## 折行

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

## 行内

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
