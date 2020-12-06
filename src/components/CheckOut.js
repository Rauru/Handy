import Header from "./Header";
import "normalize.css/normalize.css";
import Footer from "./Footer";
import Carousel from "./CarouselCheckOut";
import CheckOutInfo from "./CheckOutInfo";

function CheckOut() {
  return (
    <body>
      <Header />
      <Carousel />
      <CheckOutInfo/>
      <Footer />
    </body>
  );
}

export default CheckOut;