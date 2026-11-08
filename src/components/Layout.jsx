import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';
import BackToTop from './BackToTop';
import Preloader from './Preloader';
import ScrollAnimations from './ScrollAnimations';

export default function Layout() {
  return (
    <div className="site">
      <Preloader />
      <Header />
      <ScrollAnimations />
      <main className="site-main">
        <Outlet />
      </main>
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}
