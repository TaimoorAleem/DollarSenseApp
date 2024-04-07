// import React from 'react'

// const RegisterPage = () => {
//   return (
//     <div>RegisterPage</div>
//   )
// }

// export default RegisterPage

import React, { useState } from 'react';
import { auth, db } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
      });
      navigate('/dashboard');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Email already has an account. Please login instead.');
      } else {
        setErrorMessage('Error registering account');
      }
    }
  };

  return (
    <div className="container mx-auto my-12 p-8 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-black block w-full p-2 mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-black block w-full p-2 mb-4"
          required
        />
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Register
        </button>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <p className="mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login instead
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
