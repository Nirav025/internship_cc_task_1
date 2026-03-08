

function About() {
  return (
    <div className="about-section">
      <div className="container">

        <h2 className="text-center mb-5">About Us</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">

            <div className="card about-card">
              <div className="card-body text-center">
                <h4 className="card-title">React Demo Project</h4>

                <p className="card-text">
                  This project demonstrates how to create a clean layout using
                  React Router, reusable components like Navbar and Footer,
                  and Bootstrap for responsive design.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default About;