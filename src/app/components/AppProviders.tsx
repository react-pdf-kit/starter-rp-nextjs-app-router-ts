"use client";
import { RPConfig, RPConfigProps } from "@react-pdf-kit/viewer";
import { type PropsWithChildren } from "react";

function AppProviders({
  children,
  ...props
}: PropsWithChildren<RPConfigProps>) {
  return <RPConfig {...props}>{children}</RPConfig>;
}
export default AppProviders;
