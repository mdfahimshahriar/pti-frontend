import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";


function App() {
  return (
    <div>
      <div className="w-screen h-auto bg-slate-200 p-7">
        <Navbar />
        <div className="flex justify-center items-center">
          <Banner />
        </div>
        <Popular />
        <Recommended />
        <Footer />
      </div>
    </div>
  );
}

export default App;
