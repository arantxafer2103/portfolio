import "../globals.css";
import { fontVariables } from "../fonts";

export default function RootRedirectLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${fontVariables} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
