import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted");
  };

  return (
    <div className="login-section">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-md-5">

            <div className="card login-card">

              <div className="card-body">

                <h3 className="text-center mb-4">Login</h3>

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>

                </form>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;