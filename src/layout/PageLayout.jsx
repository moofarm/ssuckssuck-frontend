import { Header } from "./Header";
import { Footer } from "./Footer";

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
