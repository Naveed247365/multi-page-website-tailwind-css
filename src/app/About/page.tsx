import React from 'react'

const About = () => {
  return (
      <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url(about.jpg)"}}>
        <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
          <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
          <p>Welcome to our EirBuds website! We are a passionate team dedicated to providing you with the best headphones for your music experience.
            Our mission is to curate a collection of headphones that combine exceptional sound quality with stylish designs to enhance your listening experience.
            Whether you're a music enthusiast or a fan of high-quality audio, our EirBuds website has something for everyone.
            Shop now and discover the perfect headphones for your music journey.
          </p>
        </div>
      </section>
  )
}

export default About