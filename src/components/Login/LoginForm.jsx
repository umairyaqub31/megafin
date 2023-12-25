import React from "react";

const LoginForm = () => {
  return (
    <>
      <div className="mx-4 my-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className=" pt-4 px-4 shadow rounded">
              <h4 className="fw-bold text-blue my-2 text-center">
                Welcome Back!{" "}
              </h4>
              <p className="text-center" style={{ color: "rgba(0, 0, 0, 1)" }}>
                Please log in to continue.
              </p>
              <form>
                <div class="mb-4 mt-4">
                  <label for="exampleInputEmail1" class="form-label fs-15">
                    Enter Your Email ID
                  </label>
                  <input
                    type="email"
                    placeholder="jameswilliams@email.com"
                    class="form-control inputDesign shadow-none"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label fs-15">
                    Enter Your Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    class="form-control inputDesign shadow-none"
                    id="exampleInputPassword1"
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
                <button className="btn shadow-none w-100 bg-orange py-2 mt-4 text-light px-4">
                  Log in
                </button>
                <p className="text-center py-4 ">
                  Don’t have an account?{" "}
                  <a
                    href="##"
                    className="text-decoration-none text-orange cursor-pointer"
                  >
                    Sign Up
                  </a>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
