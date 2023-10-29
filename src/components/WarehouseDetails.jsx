import { React, useState, useEffect } from 'react'
import warehouses from "../warehouse.json"
import { useParams } from 'react-router-dom';
import Navbar from "./Navbar";
import  Footer  from './Footer';

const WarehouseDetails = () => {
  const { id } = useParams();
  if (!warehouses) {
    return <div>Loading...</div>; 
  }
  const data = warehouses.find((data) => data.id === parseInt(id));

  return (
    <div className='bg-blue-200 min-h-full bg-[url(https://images.unsplash.com/photo-1549194388-2469d59ec75c?auto=format&fit=crop&q=80&w=2672&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] '>
    <Navbar />
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm w-[70rem] m-auto my-[25.5rem] bg-white">
  <dl className="-my-3 divide-y divide-gray-100 text-sm">
    <div key={data.id}>
    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
      key={data.id}
    >
      
      
      <dt className="font-bold text-2xl text-gray-900">Name</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.name}</dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-bold text-2xl text-gray-900">Code</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.code}</dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-bold text-2xl text-gray-900">City</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.city}</dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-bold text-2xl text-gray-900">Space Available</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.space_available}</dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-bold text-2xl text-gray-900">Type</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.type}</dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-bold text-2xl text-gray-900">Cluster</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.cluster}</dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-bold text-2xl text-gray-900">Registered</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.is_registered==true?"True":"False"}</dd>
    </div>

    <div
      className="grid grid-cols-1 gap-1 p-3 even:bg-blue-100 sm:grid-cols-3 sm:gap-4"
    >
      <dt className="font-bold text-2xl text-gray-900">Live</dt>
      <dd className="text-gray-700 text-2xl sm:col-span-2">{data.is_live==true?"True":"False"}</dd>
    </div>

    </div>
  </dl>
</div>
<Footer />
</div>

  )
}

export default WarehouseDetails