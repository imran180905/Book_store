import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <div className="min-h-[calc(100vh-136px)]">
          <Outlet />
        </div>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
