import Header from '../components/landingPage/Header';
import Testimonials from '../components/landingPage/Testimonials';
import Faqs from '../components/landingPage/Faqs';
import InfoStepsCalculator from '../components/landingPage/InfoStepsCalculator';

const Home = () => (
  <div className="justify-center text-center mx-auto p-8">
     <Header />
      <InfoStepsCalculator />
      <Faqs />
      <Testimonials />
  </div>
);
export default Home;
