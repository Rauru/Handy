import Header from "./Header";
import "normalize.css/normalize.css";
import Footer from "./Footer";
import Carousel from "./CarouselProduct";
import InputGroup from "./InputGroup";

function ProductEntry() {
  return (
    <body>
      <Header />
      <Carousel />
      <InputGroup />
      <Footer />
    </body>
  );
}

export default ProductEntry;