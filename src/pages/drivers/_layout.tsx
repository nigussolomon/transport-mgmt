import { ReactNode } from "react";
import Shell from "@/components/layout/shell/shell";

export default function ProductsLayout({
  children,
  title,
  action,
}: {
  children: ReactNode;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <Shell title={title} action={action}>
      {children}
    </Shell>
  );
}
