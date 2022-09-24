import type { NextPage } from "next";
import Banner from "../components/Home/Banner/Banner";

import Layout from "../components/Layout/Layout";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";
import Offers from "../components/Home/Offers/Offers";
import TopCategories from "../components/Home/TopCategories/TopCategories";
import NewArrival from "../components/Home/NewArrival/NewArrival";
import HotDeal from "../components/Home/HotDeal/HotDeal";
import MostSold from "../components/Home/MostSold/MostSold";
import HomeProducts from "../components/Home/HomeProducts/HomeProducts";
import UserFeedback from "../components/Home/UserFeedback/UserFeedback";

const Home: NextPage = () => {
  return (
    <Layout title="Homepage">
      <Banner />
      <Offers />
      <TopCategories />
      <HomeProducts />
      <HotDeal />
      <NewArrival />
      <UserFeedback />
      <MostSold />
    </Layout>
  );
};

export default Home;

// NEXT_PUBLIC_API_KEY=AIzaSyA96nSXAfV2-S-o0-5qsb-2dD8IV3tjVJY
// NEXT_PUBLIC_AUTH_DOMAIN=shop-550b7.firebaseapp.com
// NEXT_PUBLIC_PROJECT_ID=shop-550b7
// NEXT_PUBLIC_STORAGE_BUCKET=shop-550b7.appspot.com
// NEXT_PUBLIC_MESSAGING_SENDER_ID=75108340345
// NEXT_PUBLIC_APP_ID=1:75108340345:web:84841d613f98aa4d2efaa8
