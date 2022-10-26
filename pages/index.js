import Head from "next/head";
import HomeHero from "../components/home/HomeHero";
import Sharing from "../components/home/Sharing";
import Signing from "../components/home/Signing";
import Solution from "../components/home/Solution";
import Footer from "../components/common/Footer";

const defaultTitle = "Find your lawyer. Connect online. | LawConnect";
const defaultDescription =
  "Find your lawyer and connect online with LawConnect (formerly LawTap). Get legal advice, make the right legal decisions and read verified lawyer reviews from real clients.";

const HomePage = ({
  title = defaultTitle,
  description = defaultDescription,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,700;0,800;0,900;1,300;1,600;1,900&family=Nunito:wght@200&display=swap');
        </style>
      </Head>
      <HomeHero />
      <Solution />
      <Sharing />
      <Signing />
      <Footer />
    </div>
  );
};

export default HomePage;
