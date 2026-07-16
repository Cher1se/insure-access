import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Register.css";

function Register() {
  return (
    <>
      <Navbar />

      <section className="register-section">
        <div className="register-box">

          <h1>Create an Account</h1>

          <p>
            Register to access your insurance portal.
          </p>

          <form>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button>
              Register
            </button>

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;
