import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { NewCArd } from './NewCArd';
import { Pagefooter } from './Pagefooter';

export const Searchitem = () => {

    const [search, setSearch] = useState('')

    const fetchFirstData = async (query) => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${query.toString()}`);
        return response.data;
    };

    const { data: firstData, isLoading: isLoadingFirst } = useQuery(['firstData', search], () => fetchFirstData(search));

    const combinedData = [...(firstData || [])];


    return (
        <>
            <motion.div initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.75
                }}>

                <Navbar />
                <section className='flex justify-center' >
                    <form className='p-3 ' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div className="relative   " style={{ width: '80vw' }} >
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            </div>
                            <input type="search" id="default-search" className="block w-full 
                            p-3 pl-10 text-sm
                             text-gray-900 border border-gray-300 rounded-lg
                              bg-gray-50 focus:ring-blue-500 focus:border-blue-500  
                                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Product......" value={search} onChange={(e) => {

                                    setSearch(e.target.value)
                                }} required />
                            <button type="submit" className="text-white absolute 
top-2 bg-blue-700 right-2
                         hover:bg-blue-800 focus:ring-4
                          focus:outline-none focus:ring-blue-300
                           font-medium rounded-lg text-sm px-4 py-2   " >Search</button>
                        </div>
                    </form>

                </section>

                <div className='flex justify-center items-center pb-2'>
                    <span className=" text-blue-800 text-xs font-medium mr-2  py-0.5 rounded ">Search By:-</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">Electronic</span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">jewelery</span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ">men's clothing</span>

                </div>
                <div className=' p-2 flex flex-wrap justify-center items-center gap-10'>

                    {
                        combinedData && combinedData?.map((item) => {
                            return <>
                                <NewCArd item={item} />

                            </>
                        })

                    }
                </div>
                <Pagefooter />
            </motion.div>

        </>
    )
}
