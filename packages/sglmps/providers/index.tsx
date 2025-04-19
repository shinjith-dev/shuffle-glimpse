import { ReactNode } from "react";
import ReactQueryProvider from "./react-query";

export default function Providers({ children }: { children: ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
