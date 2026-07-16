import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Contact.css";


function Contact() {

  return (

    <>

      <Navbar />


      <section className="contact-hero">

        <h1>
          Contact <span>Us.</span>
        </h1>

        <p>
          Have questions or need assistance? Our team is ready to help you.
        </p>

      </section>



      <section className="contact-section">


        <div className="contact-info">

          <h2>
            Get In Touch
          </h2>


          <p>
            📧 Email: support@insureaccess.com
          </p>


          <p>
            📞 Phone: +254 700 123 456
          </p>


          <p>
            📍 Location: Nairobi, Kenya
          </p>


        </div>



        <form className="contact-form">


          <input
            type="text"
            placeholder="Your Name"
          />


          <input
            type="email"
            placeholder="Your Email"
          />


          <textarea
            placeholder="Your Message"
          ></textarea>


          <button>
            Send Message
          </button>


        </form>


      </section>



      <Footer />

    </>

  );

}


export default Contact;