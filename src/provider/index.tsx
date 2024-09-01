import NextUI from "./NextUI";

export default function Provider({ children }: { children: React.ReactNode }) : JSX.Element {
  return <NextUI>{children}</NextUI>;
}