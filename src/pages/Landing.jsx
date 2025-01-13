
import { useNavigate, Link } from 'react-router-dom';
import { loginApi, registerApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';


function Landing({ register }) {
  
  const navigate = useNavigate();
  
  
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const showToast = (message, type) => {
    type === "success" ? toast.success(message) : toast.error(message);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userDetails;

    if (!username || !email || !password) {
      showToast("Please fill all fields completely", "error");
      return;
    }

    try {
      const result = await registerApi(userDetails);
      if (result.status == 200) {
        showToast("Registration Successful", "success");
        setUserDetails({ username: "", email: "", password: "" });
        navigate("/login");
      } else {
        showToast("Something went wrong", "error");
      }
    } catch (error) {
      showToast("Registration failed. Please try again.", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;

    if (!email || !password) {
      showToast("Please fill all fields completely", "error");
      return;
    }

    try {
      const result = await loginApi(userDetails);
      if (result.status === 200) {
        showToast("Login successfully", "success");
        setUserDetails({ username: "", email: "", password: "" });
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
        sessionStorage.setItem("token", result.data.token);
        navigate('/');
      } else {
        showToast("Something went wrong", "error");
      }
    } catch (error) {
      showToast("Login failed. Please try again.", error);
    }
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: "url('https://img.freepik.com/premium-photo/purple-room-with-purple-pink-lights-wall_337384-141048.jpg?w=1060')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        className='d-flex justify-content-center align-items-center'
      >
        <div style={{ height: '400px', width: '500px' }} className='border shadowed'>
          <h1 style={{ color: 'darkblue', fontWeight: '500' }} className='text-center fs-1 mt-3'>
            {register ? "Sign Up" : "Login"}
          </h1>
          <form onSubmit={register ? handleRegister : handleLogin}>
            <div className="row d-flex justify-content-center">
              {register && (
                <div className="col-mb-3 w-100 d-flex justify-content-center mt-3">
                  <input
                    type="text"
                    placeholder='Username'
                    value={userDetails.username}
                    onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                    className='form-control w-75 p-2'
                    required
                  />
                </div>
              )}
              <div className="col-mb-3 w-100 d-flex justify-content-center mt-3">
                <input
                  type="email"
                  placeholder='Email'
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  className='form-control w-75 p-2'
                  required
                />
              </div>
              <div className="col-mb-3 w-100 d-flex justify-content-center mt-3">
                <input
                  type="password"
                  placeholder='Password'
                  value={userDetails.password}
                  onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                  className='form-control w-75 p-2'
                  required
                />
              </div>
              <div className="col-mb-3 w-100 mt-4 d-flex justify-content-center">
                <div className='w-75'>
                  <button type='submit' className='btn btn-primary w-100'>
                    {register ? "Sign Up" : "Login"}
                  </button>
                  <p className='mt-2'>
                    {register
                      ? "Already a user? Please "
                      : "New user? Please "}
                    <Link to={register ? '/login' : '/register'}>
                      {register ? "Log In" : "Sign Up"}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Landing;
