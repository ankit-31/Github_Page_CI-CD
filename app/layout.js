import "./globals.css";

export const metadata = {
  title: "myshop | Electronics Store",
  description: "Smart gadgets, home electronics and accessories at amazing prices."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
