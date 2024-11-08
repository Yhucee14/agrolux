import React, { createContext, useContext, useState,  } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [loggedIn, setLoggedIn] = useState(!!user);

  const login = async (email, password) => {
    try {
      const response = await fetch('https://agrolux.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log('User data after registration:', data.user)
      if (response.ok) {
        setUser(data);
        setLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(data));
        return { success: true };
       

      } else {
        console.error('Login failed:', data.message);
        setLoggedIn(false);
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoggedIn(false);
      return { success: false, message: 'An unexpected error occurred.' };
    }
  };
  

  const register = async (fullName, email, password) => {
    try {
      const response = await fetch('https://agrolux.onrender.com/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });
  
      const data = await response.json();
      
      // Log the user data to verify the response structure
      console.log('User data after registration:', data);
  
      if (response.ok) {
        setUser(data); // Store the user data as received
        setLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(data));
        return { success: true };
      } else {
        console.error('Registration failed:', data.message);
        return { success: false, message: data.message || 'Registration failed' };
      }
    } catch (error) {
      console.error('Error during registration:', error);
      return { success: false, message: 'An unexpected error occurred.' };
    }
  };
  
  

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loggedIn, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
