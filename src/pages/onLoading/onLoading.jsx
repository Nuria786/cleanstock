import React from "react";
import "./onLoading.css";
import ReusableOnloading from "../../components/rusableonloading";
import CreateTeam from "../createTeam";
import Home from "../home/home";


// Shuould only show you login/signup when a users is not logged in
// Should have a protected route so you can't access the page unless you are logged in (eg. if you are not logged in, you should be redirected to the login page)
// Once user is login in, they should be redirected to the homepage
const Onloading = () => {
  console.log("Onloading");
  return (
    <div>
      <ReusableOnloading
        content={
          <div className="loading-screen">
            <div className="secured">
              <h1>Stocks</h1>
              <p>Your business secured...</p>
            </div>
            <p id="secured">Secured by stocks</p>
          </div>
        }
        time={1000}
      >
        <div>
          <Home />
        </div>
      </ReusableOnloading>
    </div>
  );
};

export default Onloading;
