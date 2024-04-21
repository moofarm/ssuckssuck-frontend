import { Footer } from "../components/Footer";

const PageLayout = ({ page }) => {
  return (
    <div>
      {page}
      <Footer />
    </div>
  );
};

export default PageLayout;
