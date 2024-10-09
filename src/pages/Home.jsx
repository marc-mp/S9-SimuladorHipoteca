import Header from '../components/landingPage/Header';
import Hero from '../components/landingPage/Hero';
import Testimonials from '../components/landingPage/Testimonials';
import Faqs from '../components/landingPage/Faqs';
import TemasRelacionados from '../components/landingPage/TemasRelacionados';
import InfoStepsCalculator from '../components/landingPage/InfoStepsCalculator';
import CalcTemplate from '../components/landingPage/CalcTemplate';

const Home = () => (
  <div className="justify-center text-center mx-auto p-8 ">
     <Header />
      <Hero />
      <InfoStepsCalculator />
      <Faqs />
      <Testimonials />
      <TemasRelacionados />
      {/* <CalcTemplate/> */}
  </div>
);
export default Home;
