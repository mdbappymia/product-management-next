import Head from "next/head";
import { FC } from "react";
import Navbar from "../Navbar/Navbar";

interface IProps {
  children: any;
  title: string;
}
const Layout: FC<IProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
