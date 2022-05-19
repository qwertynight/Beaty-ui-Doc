import Oauth from '../../components/Oauth/Oauth'

import "../../components/Navbar.css";

const SignIn = () => {

  return (
    <>
      <div className="signForm mt-5 mb-5">
        <header>
          <p className="pageHeader text-white">Sign in with</p>
        </header>
        <Oauth></Oauth>
      </div>
    </>
  );
};

export default SignIn;
