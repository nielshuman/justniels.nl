import "./globals.css";

export const metadata = {
  title: "Justniels.nl",
  description: "Niels Huisman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        {children}
      </body>
    </html>
  );
}
