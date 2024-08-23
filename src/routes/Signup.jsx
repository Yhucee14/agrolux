import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); // Clear previous errors
    const { success, message } = await register(firstName, email, password);
    setLoading(false);
    if (success) {
      navigate('/dashboard');
    } else {
      setErrorMessage(message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px] flex-col">
      <Link to="/">
        <h1 className="text-[#ffffff] font-bold text-[28px] p-[40px]">
          Agrolux
        </h1>
      </Link>

      <div className="h-[70%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[38px] max-md:px-[20px]">
        <div>
          <h1 className="text-[70px] text-[#204e51] font-semibold max-md:text-[50px]">
            Sign Up
          </h1>
          <p className="font-light text-[15px] ml-[10px]">Join Us Today</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-[43px] gap-9">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />

          {loading ? (
            <div className="flex items-center h-[60px] rounded-[20px] text-white bg-[#204E51] justify-center">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 font-extrabold rounded-full text-[#0c0a0a]" role="status">
                <span className="visually-hidden">o</span>
              </div>
            </div>
          ) : (
            <button
              className="w-full h-[60px] rounded-[20px] text-white bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer max-md:text-[16px]"
              type="submit"
            >
              Sign Up
            </button>
          )}

          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </form>

        <p className="text-[15px] font-light">
          Already have an account?{' '}
          <Link to="/login">
            <span className="text-[#204e51]">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
