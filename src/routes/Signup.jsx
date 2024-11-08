import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState('');
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

    // Simple form validation
    if (!fullName || !email || !password) {
      setErrorMessage("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const result = await register(fullName, email, password); // Await the result

    setLoading(false);

    if (result && result.success) {
      navigate('/dashboard');
    } else {
      setErrorMessage(result?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px] flex-col">
      <Link to="/">
        <h1 className="text-[#ffffff] font-bold text-[28px] p-[40px]">
          Agrolux
        </h1>
      </Link>

      <div className="md:h-[80%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[32px] max-md:px-[20px]">
        <div>
          <h1 className="text-[70px] text-[#204e51] font-semibold max-md:text-[50px]">
            Sign Up
          </h1>
          <p className="font-light text-[15px] ml-[10px]">Join Us Today</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-[43px] gap-9">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
              className="w-full h-[60px] rounded-[20px] text-white bg-[#204e51] text-[20px] flex items-center justify-center cursor-pointer max-md:text-[16px]"
              type="submit"
              disabled={loading} // Disable button during loading
            >
              Sign Up
            </button>
          )}

          {errorMessage && (
            <p className="text-red-500 font-bold sm:text-lg md:mt-[-18px] lg:mt-0 text-center">{errorMessage}</p>
          )}
        </form>

        <p className="flex justify-center sm:text-lg px-2 py-1 md:py-2 font-light">
          Already have an account?{' '}
          <Link to="/login">
            <span className="text-[#204e51] font-bold">Login here..</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
