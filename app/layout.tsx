import Navbar from "@/components/Navbar";
import './globals.css';
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Basic Next.js",
  description: "Basic Next.js 15 tutorial",
  keywords: "next.js, tutorial"
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};
export default layout;
