import Tracker from "@/components/Tracker";
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
      <Tracker url='https://analytics.caprover.justniels.nl' id='658ff237-a289-486c-b962-596fe199c1be' options={{detailed: true}}/>
    </html>
  );
}
