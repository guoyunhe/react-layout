# RowLayout 行布局

## 默认

默认间距是 8px，水平左对齐，垂直居中对齐。

```jsx filename="默认"
import { RowLayout } from '@guoyunhe/react-layout';

<RowLayout>
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</RowLayout>;
```

## 间距

```jsx filename="像素间距"
import { RowLayout } from '@guoyunhe/react-layout';

<RowLayout gap={20}>
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</RowLayout>;
```

```jsx filename="其他单位间距"
import { RowLayout } from '@guoyunhe/react-layout';

<RowLayout gap="2rem">
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</RowLayout>;
```

## 折行

```jsx filename="折行"
import { RowLayout } from '@guoyunhe/react-layout';

<div style={{ maxWidth: 300 }}>
  <RowLayout wrap>
    <button style={{ fontSize: 12 }}>小按钮</button>
    <button style={{ fontSize: 16 }}>中按钮</button>
    <button style={{ fontSize: 20 }}>大按钮</button>
  </RowLayout>
</div>;
```

## 行内

```jsx filename="行内"
import { RowLayout } from '@guoyunhe/react-layout';

<div>
  <RowLayout inline>
    <button style={{ fontSize: 12 }}>小按钮</button>
    <button style={{ fontSize: 16 }}>中按钮</button>
    <button style={{ fontSize: 20 }}>大按钮</button>
  </RowLayout>
  &nbsp;
  <span>其他内容...</span>
</div>;
```
