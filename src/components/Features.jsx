import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why Choose Insure Access?</h2>

      <div className="features-container">

        <div className="feature-card">
          <h3>🛡️ Secure Access</h3>
          <p>
            Your personal and policy information is protected using secure
            authentication and encryption.
          </p>
        </div>


        <div className="feature-card">
          <h3>📄 Easy Claim Tracking</h3>
          <p>
            Monitor the progress of your insurance claims anytime without
            visiting a branch.
          </p>
        </div>


        <div className="feature-card">
          <h3>📱 Anytime, Anywhere</h3>
          <p>
            Access your insurance services from your computer, tablet or
            smartphone.
          </p>
        </div>


        <div className="feature-card">
          <h3>🔔 Instant Notifications</h3>
          <p>
            Receive updates on claims, policy renewals and important insurance
            reminders.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;