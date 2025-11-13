import Banner from "../components/Banner";
import BottomBanner from "../components/BottomBanner";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";

import Header from "../components/Header";
import News from "../components/News";
import SectionFutureTwo from "../components/SectionFutureTwo";

const HomePage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <Banner />
      <FeatureSection />
      <SectionFutureTwo/>  
      <BottomBanner/>
      < News/>
      <Footer/>
    </div>
  );
};

export default HomePage;
