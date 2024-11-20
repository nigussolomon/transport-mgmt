import { ReactNode } from "react";
import Shell from "@/components/layout/shell/shell";

export default function ProductsLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return <Shell title={title}>{children}</Shell>;
}
