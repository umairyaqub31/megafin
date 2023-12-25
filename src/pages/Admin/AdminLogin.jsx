import React from "react";

const AdminLogin = () => {
  return (
    <>
      <div className="adminLogin_img">
        <div
          className="admin_Form col-md-4 py-4 px-5"
          style={{
            border: "1px solid rgba(191, 218, 198, 0.6)",
            borderRadius: "1rem",
          }}
        >
          <h2 className="fw-bold text-center mt-3 ">Sign in to Our Website</h2>
          <form>
            <div class="mb-4 mt-4">
              <label for="exampleInputEmail1" class="form-label fs-14">
                Email Address
              </label>
              <input
                type="email"
                placeholder="James78@email.com"
                class="form-control whiteplaceholder text-white bg-transparent border-secondary shadow-none"
                id="exampleInputEmail1"
                style={{
                  background:
                    "linear-gradient(rgba(153, 124, 124, 0.17),rgba(153, 124, 124, 0.17))",
                  padding: "10px",
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label fs-14">
                Password
              </label>
              <input
                type="password"
                placeholder="*******"
                class="form-control text-white whiteplaceholder bg-transparent border-secondary shadow-none"
                id="exampleInputPassword1"
                style={{
                  background:
                    "linear-gradient(rgba(153, 124, 124, 0.17),rgba(153, 124, 124, 0.17))",
                  padding: "10px",
                }}
              />
            </div>
            <div className="d-flex justify-content-between">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input  shadow-none"
                  id="exampleCheck1"
                  checked
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me!
                </label>
              </div>
              <a
                href="##"
                className="text-decoration-none mb-0 text-orange cursor-pointer"
              >
                Forgot Password?
              </a>
            </div>
            <div
              className="rounded border-secondary mt-3 form-control whiteplaceholder"
              style={{
                background:
                  "linear-gradient(rgba(153, 124, 124, 0.17),rgba(153, 124, 124, 0.17))",
                padding: "6px",
                color: "#ccc",
              }}
            >
              Enter Captcha
              <button className="btn text-light bg-orange py-1">25eeDc8</button>
            </div>
            <button className="btn shadow-none w-100 bg-orange py-2 mt-4 text-light px-4">
              Log in
            </button>
            <p className="text-center py-4 ">
              Don’t have an account?{" "}
              <a
                href="##"
                className="text-decoration-none text-orange cursor-pointer"
              >
                Create One
              </a>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
