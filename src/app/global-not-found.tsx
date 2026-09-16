import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
  title: "404 · Arantxa Fernández",
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${fontVariables} antialiased`}>
      <body className="font-sans">
        <main className="grid min-h-dvh place-items-center px-5 text-center">
          <div>
            <p className="font-display text-6xl font-semibold text-rose">404</p>
            <p className="mt-3 text-ink-soft">
              Página no encontrada · Page not found · Pàgina no trobada
            </p>
            <Link
              href="/"
              className="mt-6 inline-block rounded-full bg-rose px-5 py-3 text-sm font-bold text-on-accent"
            >
              Arantxa Fernández
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
