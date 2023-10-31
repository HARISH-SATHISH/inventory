"use client"
import React from 'react'
import { useState } from 'react';

const Add = () => {
  const [productForm, setProductForm] = useState({
    productName: '',
    quantity: 0,
    price: 0,
    date: '',
    time: '',
    category: '',
    remarks: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  const handleAddProduct = async () => {
    const response = await fetch("/database", {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productForm)
    })
    console.log(response)
    if(response.ok==true)
    setProductForm({ productName: '',
    quantity: 0,
    price: 0,
    date: '',
    time: '',
    category: '',
    remarks: '',})
  };
  return (
    <>
      <form>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="border border-gray-300 rounded-md w-full p-2"
            value={productForm.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="border border-gray-300 rounded-md w-full p-2"
            value={productForm.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="border border-gray-300 rounded-md w-full p-2"
            value={productForm.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="border border-gray-300 rounded-md w-full p-2"
            value={productForm.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="border border-gray-300 rounded-md w-full p-2"
            value={productForm.time}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="border border-gray-300 rounded-md w-full p-2"
            value={productForm.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="remarks" className="block text-sm font-medium text-gray-700">
            Remarks
          </label>
          <textarea
            id="remarks"
            name="remarks"
            className="border border-gray-300 rounded-md w-full p-2"
            value={productForm.remarks}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          onClick={handleAddProduct}
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </>
  )
}

export default Add