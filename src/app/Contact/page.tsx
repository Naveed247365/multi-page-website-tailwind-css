import React from 'react'

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-3">
            <p><strong>Email:</strong> info@eirbuds.com</p>
            <p><strong>Phone:</strong> +1 234 567 8900</p>
            <p><strong>Address:</strong> 123 EirBuds Street, Audio City, AC 12345</p>
          </div>
        </div>
      </div>
    </main>
  )
}