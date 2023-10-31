"use client"
import React from 'react'
import { useState, useEffect } from 'react'

const View = () => {
 
 
  const [products, setproducts] = useState([])
 
 
  useEffect(() => {
    const getdata = async () => {
      const response = await fetch('/database')
      const res = await response.json()

      setproducts(res.products)

    }
    getdata()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold">Product List</h2>
      <table className="min-w-full divide-y divide-gray-300 mt-4 border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
              Product Name
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
              Quantity
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
              Price
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
              Time
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
              Category
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
              Remarks
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {products.map((product, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{product.productName}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{product.quantity}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">${product.price}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{product.date}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{product.time}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{product.category}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{product.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default View