import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Pagefooter } from './Pagefooter';


export const SingleProduct = () => {
    const { id } = useParams()
    const { isError, isLoading, data } = useQuery({
        queryKey: ['singleProduct'],
        queryFn: async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            const data = await response.data;
            return data;
        }
    })
    console.log(data)
    return (
        <>

            <motion.div initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.75
                }}>
                <Navbar />
                {
                    isLoading ? <>
                        <div className='w-full text-center p-4'>
                            <div role="status ">
                                <svg ariaHidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg> <br />
                                <span className="s">Loading...</span>
                            </div>

                        </div>
                    </> : <>
                        <section className="pt-5">
                            <div className="container">
                                <div className="row row-cols-1 row-cols-lg-2">
                                    <div className="col ">
                                        <div className="image_collection d-flex justify-content-around  ">

                                            <div className="mainImage ">
                                                <picture><img
                                                    src={data.image}
                                                    alt="" className="img-fluid" style={{ width: ' 200px' }} /></picture>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col p-3" id="Product_Detail">
                                        <div className="details" style={{ lineHeight: '20px' }}>
                                            <h2 className="text-primary text-decoration-underline text-blue-600 font-mono text-2xl">Products</h2>
                                            <span className='capitalize font-semibold '>Name: {data.category}</span> <br />
                                            <span className='capitalize font-semibold '>Price:  ${data.price}</span> <br />
                                            <span className='capitalize font-semibold text-justify '>Description:  {data.description}</span> <br />
                                            <span className='capitalize font-semibold '>Rating:  {data.rating.rate}</span>

                                            <div className="add pt-2">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn btn-primary text-pink-800 hover:text-white">-</button>
                                                    <input type="text" disabled value='12' className='text-center  bg-white w-10 border-1 border-blue-500' />
                                                    <button type="button" className="btn btn-primary text-pink-800 hover:text-white">+</button>
                                                </div>

                                                <a href="#" className=" ms-2 btn btn-primary"> <i className="fas fa-cart-plus fs-6"></i> <span className="mx-2" style={{ fontFamily: 'var(--body-ff)' }}>Add to Cart</span></a>

                                            </div>
                                            <div className="share pt-4 d-flex ">
                                                <span className="">Share On:</span>
                                                <ol className="d-flex align-items-center ps-2">
                                                    <li className='pe-2'> <a href="#"> <i className="fab fa-instagram"></i> </a></li>
                                                    <li className='pe-2'> <a href="#"> <i className="fab fa-facebook"></i></a></li>
                                                    <li className='pe-2'> <a href="#"> <i className="fab fa-youtube"></i></a></li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                }
                <Pagefooter />
            </motion.div>

        </>
    )
}
