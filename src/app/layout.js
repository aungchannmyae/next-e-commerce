import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" h-full">
      <body className=" flex flex-col min-h-full">
        <NextTopLoader color="#6e11b0" />
        <Header />
        <main className=" max-md:px-5 max-lg:px-10 px-0 flex-grow">{children}</main>
        <Footer />
        <ToastContainer autoClose={1000} position="bottom-right" />
      </body>
    </html>
  );
}
