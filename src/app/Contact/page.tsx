import React from 'react'

const Contact = () => {
  return (
      <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center' data-aos="fade-up">Contact Us</h2>
        <form>
          <input type="text" placeholder='full name'className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' required/>
          <input type="email" placeholder='email address'className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' required/>
          <input type="text" placeholder='phone number'className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' />
          <textarea placeholder='your message'className='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' rows={5} required></textarea>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>send message</button>
        </form>
      </section>
  )
}

export default Contact