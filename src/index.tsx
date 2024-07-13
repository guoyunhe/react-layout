import cn from "classnames";
import { CSSProperties, ReactNode } from "react";
import "./index.css";

export interface ReactLayoutProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function ReactLayout({ children, className, style }: ReactLayoutProps) {
  return (
    <ReactLayout className={cn("react-layout", className)} style={style}>
      {children}
    </ReactLayout>
  );
}
