import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/About.css";


function About() {

  return (

    <>

      <Navbar />


      <section className="about-hero">


        <div className="about-text">

          <h1>
            About Insure <span>Access.</span>
          </h1>


          <p>
            Insure Access is a digital insurance customer portal designed
            to simplify how customers manage policies, track claims, and
            access insurance services securely from anywhere.
          </p>


        </div>


        <div className="about-image">

          <img
            src="/hero-illustration.png"
            alt="Insurance illustration"
          />

        </div>


      </section>



      <section className="about-info">


        <h2>
          Who We Are
        </h2>


        <div className="info-container">


          <div className="info-card">

            <h3>
              Our Mission
            </h3>

            <p>
              To provide customers with a secure, convenient and efficient
              platform that improves their insurance experience through
              technology.
            </p>

          </div>



          <div className="info-card">

            <h3>
              Our Vision
            </h3>

            <p>
              To become a trusted digital insurance platform that connects
              customers with simple and accessible insurance solutions.
            </p>

          </div>


        </div>


      </section>



      <Footer />

    </>

  );

}


export default About;