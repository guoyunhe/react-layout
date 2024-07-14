# ColumnLayout 列布局

## 默认

```jsx filename="默认"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout>
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</ColumnLayout>;
```

## 间距

```jsx filename="像素间距"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout gap={20}>
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</ColumnLayout>;
```

```jsx filename="其他单位间距"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout gap="2rem">
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</ColumnLayout>;
```

## 水平对齐

```jsx filename="水平对齐：左/开始"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout align="flex-start">
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</ColumnLayout>;
```

```jsx filename="水平对齐：右/结尾"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout align="flex-end">
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</ColumnLayout>;
```

```jsx filename="水平对齐：拉伸"
import { ColumnLayout } from '@guoyunhe/react-layout';

<ColumnLayout align="stretch">
  <button style={{ fontSize: 12 }}>小按钮</button>
  <button style={{ fontSize: 16 }}>中按钮</button>
  <button style={{ fontSize: 20 }}>大按钮</button>
</ColumnLayout>;
```
