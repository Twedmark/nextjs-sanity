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
      <body className="flex flex-col max-w-7xl mx-auto h-screen justify-between">
        <Header data={headerData} />
        <div className="flex-grow">{children}</div>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
