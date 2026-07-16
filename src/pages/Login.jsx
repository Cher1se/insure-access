import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Login.css";


function Login() {

  return (

    <>

      <Navbar />


      <section className="login-section">


        <div className="login-box">


          <h1>
            Welcome Back
          </h1>


          <p>
            Login to access your insurance account.
          </p>



          <form>


            <input
              type="email"
              placeholder="Email Address"
            />


            <input
              type="password"
              placeholder="Password"
            />



            <button>
              Login
            </button>


          </form>


        </div>


      </section>


      <Footer />

    </>

  );

}


export default Login;