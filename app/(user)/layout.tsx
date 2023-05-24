import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { getFooter, getHeader } from "@/sanity/sanity-utils";

export const metadata = {
  title: "TechVantage",
  description: "The most advanced tech company on the planet",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerData = await getFooter();
  const headerData = await getHeader();

  return (
    <html lang="en">
      <body className=" max-w-7xl mx-auto">
        <Header data={headerData} />
        {children}
        <Footer data={footerData} />
      </body>
    </html>
  );
}
