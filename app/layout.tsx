import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Raleway } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Og generator",
  description: "Empower Your Content with Stunning OG Images",
  keywords: "og image, open graph image, generator, og meta tag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        style={{
          backgroundImage: "radial-gradient(#3d3d3d .5px, #ffffff 0)",
          backgroundSize: "20px 20px",
          opacity: 1,
        }}
      >
        <Header />
        <main className="container px-2 flex justify-center items-center m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
