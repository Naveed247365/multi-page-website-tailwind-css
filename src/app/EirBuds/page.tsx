import React from 'react'

const EirBuds = () => {

  const eirData = [
    {
      id: 1,
      name: 'ronin',
      price: 1000,
      description: 'This is a description',
      image: '/ronin.png'
    },
    {
      id: 2,
      name: 'iphone',
      price: 25000,
      description: 'This is a description',
      image: '/iphone.jpg'
    },
    {
      id: 3,
      name: 'samsung',
      price: 10000,
      description: 'This is a description',
      image: '/samsung.jpg'
    },
    {
      id: 4,
      name: 'best',
      price: 2000,
      description: 'This is a description',
      image: '/best.jpg'
    },
    {
      id: 5,
      name: 'jbl',
      price: 10000,
      description: 'This is a description',
      image: '/jbl.png'
    },
    {
      id: 6,
      name: 'bose',
      price: 10000,
      description: 'This is a description',
      image: '/bose.jpg'
    }
  ]
  return (
      <div className='product-list grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
        {eirData.map((eir) => (
          <div key={eir.id} className='product-card bg-white p-5 rounded-md shadow-md text-center'>
            <img src={eir.image} alt={eir.name} className='w-full rounded-sm transition-transform duration-300 transform hover:scale-110' />
            <h3 className='mt-4 text-2xl font-bold'>{eir.name}</h3>
            <p className='mt-2 text-gray-500'>{eir.description}</p>
            <div className='price text-blue-500 text-xl font-semibold mt-2'>Pkr{eir.price}</div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4'>Add to Cart</button>
          </div>
        ))}
      </div>
  )
}

export default EirBuds