import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { PageProvider } from "./context/PageProvider";

const App = () => {
  return (
    <BrowserRouter>
      <PageProvider>
        <AppRoutes />
      </PageProvider>
    </BrowserRouter>
  );
};

export default App;
