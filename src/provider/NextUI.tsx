
import { NextUIProvider } from "@nextui-org/system";

export default function NextUI({ children }: { children: React.ReactNode }): JSX.Element {
  return <NextUIProvider>{children}</NextUIProvider>;
}