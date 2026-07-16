import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Services.css";


function Services() {

  return (

    <>

      <Navbar />


      <section className="services-hero">

        <h1>
          Our <span>Services.</span>
        </h1>

        <p>
          Manage your insurance experience easily with secure digital
          services designed around your needs.
        </p>

      </section>



      <section className="services-section">


        <h2>
          What You Can Do
        </h2>


        <div className="services-container">


          <div className="service-card">

            <h3>
              📄 Policy Management
            </h3>

            <p>
              View your policies, update information and access important
              insurance documents anytime.
            </p>

          </div>



          <div className="service-card">

            <h3>
              🔍 Claim Tracking
            </h3>

            <p>
              Submit claims and monitor their progress without visiting
              a physical branch.
            </p>

          </div>



          <div className="service-card">

            <h3>
              💳 Premium Payments
            </h3>

            <p>
              Make secure payments and keep track of your insurance
              premium history.
            </p>

          </div>



          <div className="service-card">

            <h3>
              🔔 Notifications
            </h3>

            <p>
              Receive reminders about renewals, claims updates and
              important insurance information.
            </p>

          </div>


        </div>


      </section>



      <Footer />

    </>

  );

}


export default Services;