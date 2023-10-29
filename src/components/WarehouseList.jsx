import warehouses from "../warehouse.json"
import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Radio } from 'antd';
import axios from 'axios'
import Navbar from "./Navbar";
import Footer from "./Footer";
import "boxicons"





const WarehouseList = ({warehouses}) => {
    const navigate = useNavigate();
    const [selected,setSelected] = useState(0);
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [checked, setChecked] = useState([])
    const [radio, setRadio] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState("")
    const [search,setSearch] = useState("")


    const handleClick =  (data) =>{
        setSelected(data);
    }

      // getfilters
      const filterProduct = async () => {
        try {
            const { data } = await axios.post(`/`, { checked, radio })
            setSelected(data)
        } catch (error) {

        }
    };

    const uniqueCitiesSet = new Set();
    warehouses.forEach((item) => {
      uniqueCitiesSet.add(item.city);
    });
    const uniqueCitiesArray = Array.from(uniqueCitiesSet);

    const uniqueClusterSet = new Set();
    warehouses.forEach((item) => {
      uniqueClusterSet.add(item.cluster);
    });
    const uniqueClusterArray = Array.from(uniqueClusterSet);

    const uniqueSpaceSet = new Set();
    warehouses.forEach((item) => {
      uniqueSpaceSet.add(item.space_available);
    });
    const uniqueSpaceArray = Array.from(uniqueSpaceSet);



    const cityFilter = (e) =>{
      setFilter(e.target.value);
    }

  return (
    <>
        <Navbar />
        <form className="d-flex p-3 my-2" role="search">
                <input
                    className="form-control me-2 rounded-2xl w-full h-11 capitalize p-5 border border-black"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e)=>setSearch(e.target.value)}
                    
                />
                <button className="flex w-10 h-9 justify-center items-center text-sm font-semibold leading-6 -mt-10 ml-auto rounded-3xl" type="submit">
                    <box-icon className="searchicon" name='search-alt-2' color="black"></box-icon>
                </button>
            </form>
      <div className="flex ">
    <div className=" bg-[#faf5ff]">
         {/* Filters By Categories */}
         <form className="relative w-[15rem] flex flex-col justify-center items-center">
                                            {/* Filters By City */}
                                            <form className="">
                                                <h4 className="text-left text-2xl font-extrabold pb-2 lg:text-2xl lg:font-bold border-b border-gray-200 px-4 py-6">Filter By City</h4>
                                                <div onChange={cityFilter}>
                                                        <div className="space-y-2 flex flex-col">
                                                        <ul className="capitalize cursor-pointer text-md font-medium text-gray-900 bg-[#faf5ff] px-2 py-1.5 hover:text-purple-900">
                                                     {uniqueCitiesArray.map((city, index) => (
                                                      <li key={index}>{city}</li>
                                                         ))}
                                                         </ul>
                                                         
                                                        </div>
                                                   
                                                </div>
                                            </form>
                                            {/* Filters By Cluster */}
                                             <form className="">
                                                <h4 className="text-left text-2xl font-extrabold pb-2 lg:text-2xl lg:font-bold border-b border-gray-200 px-4 py-6">Filter By Cluster</h4>
                                                <div onChange={(e) => setRadio(e.target.value)}>
                                                        <div className="space-y-2">
                                                        <ul className="capitalize cursor-pointer text-md font-medium text-gray-900 bg-[#faf5ff] px-2 py-1.5 hover:text-purple-900">
                                                     {uniqueClusterArray.map((cluster, index) => (
                                                      <li key={index}>{cluster}</li>
                                                         ))}
                                                         </ul>
                                                        </div>
                                                </div>
                                            </form>
                                            {/* Filters By Space Available */}
                                            <form className="">
                                                <h4 className="text-left text-2xl font-extrabold pb-2 lg:text-2xl lg:font-bold border-b border-gray-200 px-4 py-6">Filter By Space</h4>
                                                <div onChange={(e) => setRadio(e.target.value)}>
                                                        <div className="space-y-2">
                                                        <ul className="capitalize cursor-pointer text-md font-medium text-gray-900 bg-[#faf5ff] px-2 py-1.5 hover:text-purple-900">
                                                     {uniqueSpaceArray.map((space_available, index) => (
                                                      <li key={index}>{space_available}</li>
                                                         ))}
                                                         </ul>
                                                        </div>
                                                </div>
                                            </form>
                                            <form className="">
                                                <h4 className="text-left pb-2 border-t border-gray-200 px-4 py-6">
                                                    <button
                                                        className='bg-red-400 hover:bg-red-600 hover:text-white text-black font-bold text-2xl py-2 px-4 rounded-full'
                                                        onClick={() => window.location.reload()}>
                                                        Reset
                                                    </button>
                                                </h4>
                                            </form>
                                        </form>
    </div>
    <div className="text-xl font-semibold  w-full min-h-screen">
    
    <table className="min-w-full min-h-screen divide-y-2 divide-gray-200 bg-white text-sm ">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-bold text-2xl text-white bg-gray-800 ">
            Name
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-bold text-2xl text-white bg-gray-800">
            Code
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-bold text-2xl text-white bg-gray-800">
            City
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-bold text-2xl text-white bg-gray-800">
            Space Available
          </th>
          <th className="px-4 py-2 bg-gray-800 text-white font-bold text-2xl">Action</th>
        </tr>
      </thead>
        
                                                  
      <tbody className="divide-y divide-gray-200">
      {warehouses.filter((data)=> {
        return search.toLowerCase() === "" ? data : data.name.toLowerCase().includes(search);
      }).map((data) => {
      return(
          <tr key={data.id} className="text-center even:bg-blue-100" to={`/details/${data.id}`}>

          <td className="whitespace-nowrap px-4 py-2 font-medium text-xl text-gray-900" key={data.id}>
            {data.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-xl text-gray-700">{data.code}</td>
          <td className="whitespace-nowrap px-4 py-2 text-xl text-gray-700">{data.city}</td>
          <td className="whitespace-nowrap px-4 py-2 text-xl text-gray-700">{data.space_available}</td>
          <td className="whitespace-nowrap px-4 py-2">
            <Link
              to={`/details/${data.id}`}
              className="inline-block rounded-full bg-indigo-600 px-5 py-3 text-lg font-medium text-white hover:bg-indigo-700" 
            >
              View
            </Link>
          </td>
 
        </tr>
       
)})}
      </tbody>
    </table>
  </div>
  </div>
  <Footer />
  </>
  );
};

export default WarehouseList;
