import Head from "next/head";
import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

interface IProps {
  children: any;
  title: string;
}
const Layout: FC<IProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
