/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

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
        <script src="https://kit.fontawesome.com/19f635731a.js"></script>
      </Head>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
