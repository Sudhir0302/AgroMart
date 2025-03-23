import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className='flex flex-col w-full p-5 bg-gray-100 min-h-screen'>
      <div className='bg-green-700 p-4 rounded-lg shadow-md'>
        <h1 className='text-white text-center text-2xl font-bold'>Contact Us</h1>
      </div>
      <div className='w-full md:w-[50%] mx-auto bg-white p-5 mt-6 rounded-lg shadow-lg border border-transparent hover:border-black hover:border-dotted'>
        <h2 className='text-xl font-semibold text-gray-700 text-center mb-4'>Get in Touch</h2>
        <div className='flex items-center gap-3 text-gray-700 mb-3'>
          <FaEnvelope className='text-green-600' />
          <p>Email: <a href="mailto:sudhirpld2020@gmail.com" className='text-blue-600 hover:underline'>support@agromart.com</a></p>
        </div>
        <div className='flex items-center gap-3 text-gray-700 mb-3'>
          <FaPhone className='text-green-600' />
          <p>Phone: <a href="tel:+918888888888" className='text-blue-600 hover:underline'>+91 88888 88888</a></p>
        </div>
        <div className='flex items-center gap-3 text-gray-700'>
          <FaMapMarkerAlt className='text-green-600' />
          <p>Location: AgroMart</p>
        </div>
      </div>

      <div className='flex justify-center gap-6 mt-6'>
        <a href="https://facebook.com" target="_blank" rel="" className='text-blue-600 text-2xl hover:text-blue-800'>
          <FaFacebook />
        </a>
        <a href="https://X.com" target="_blank" rel="" className='text-2xl hover:text-slate-700'>
          <FaX />
        </a>
        <a href="https://instagram.com" target="_blank" rel="" className='text-pink-500 text-2xl hover:text-pink-700'>
          <FaInstagram />
        </a>
      </div>

      <footer className='text-center text-gray-600 mt-8'>
        <p>&copy; {new Date().getFullYear()} AgroMart. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Contact
