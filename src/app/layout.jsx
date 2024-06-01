import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Feijoada Da Bebel",
  description: "A melhor feijoada da região da Pampulha.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
