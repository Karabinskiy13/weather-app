/* eslint-disable react/react-in-jsx-scope */
import '../styles/home.scss';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
