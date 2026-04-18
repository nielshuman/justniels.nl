import Tracker from "@/components/Tracker";
import "./globals.css";

export const metadata = {
  title: "Onder constructie - JustNiels",
  description: "Deze website wordt momenteel ontwikkeld door JustNiels. Kijk op JustNiels.nl voor meer informatie over mijn diensten op het gebied van websiteontwikkeling en beheer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        {children}
      </body>
      {/* <Tracker 
        url='https://analytics.caprover.justniels.nl' 
        domainId='658ff237-a289-486c-b962-596fe199c1be' 
        options={{detailed: true}}
      /> */}
    </html>
  );
}
