import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesPublic from './Routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './ultils/scrollToTop';
import "sweetalert2/src/sweetalert2.scss";
function App() {
  return (
    <>
      <RoutesPublic />
      <ScrollToTop />
    </>
  );
}

export default App
