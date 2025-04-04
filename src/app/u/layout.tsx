import Footer from "@/components/Footer";
import PublicPageNavbar from "./[username]/components/PublicPageNavbar";

export const metadata = {
  title: "GhostGram",
  description: "Real Message from real people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicPageNavbar />
      {children}
      <Footer />
    </>
  );
}
