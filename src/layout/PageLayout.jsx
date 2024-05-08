import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const PageLayout = ({ page }) => {
  return (
    <div>
      <Header />
      {page}
      <Footer />
    </div>
  );
};

export default PageLayout;
