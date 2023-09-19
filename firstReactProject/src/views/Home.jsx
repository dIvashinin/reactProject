import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home">
      <h1>FAKE.STORE home</h1>

      <Navbar />

      <section>this is a home page of HOME.STORE</section>
      <img className="fake" src="/pics/fake.jpeg" alt="" />
      {/* <Footer /> */}

    </div>
  );
}

export default Home;
