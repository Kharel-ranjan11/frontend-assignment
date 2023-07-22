import React, { useState } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
export const C_ards = () => {

    const { isError, isLoading, data } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axios.get('https://fakestoreapi.com/products?limit=12');
            const data = await response.data;
            return data;
        }
    })
    return (
        <>
            <section className='p-3 flex justify-center gap-x-12  flex-wrap gap-y-12   '  key='1'>
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
                    </> :

                        data?.map(({ id, category, image, price, rating }, index) => {
                            return <>
                                <div className='w-[350px]'  key={id}>
                                    <div className='Rib_box' key={id} >

                                        <div className="relative  flex w-46  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                            <div className="ribbon"><span>IN STOCK</span></div>

                                            <div className='  overflow-hidden ProductImage p-4'>
                                                <img
                                                    src={image}
                                                   
                                                    alt={image} />
                                            </div>

                                            <div className="p-6">
                                                <div className="mb-2 flex items-center justify-between">
                                                    <p className="block capitalize   text-base font-bold  font-mono leading-relaxed text-blue-gray-900 antialiased">
                                                        {category}
                                                    </p>
                                                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                                        ${price}
                                                    </p>
                                                </div>

                                                <div className="mb-2 flex items-center justify-between">
                                                    <p className="block   text-base font-bold  font-mono leading-relaxed text-blue-gray-900 antialiased">
                                                        Rating
                                                    </p>
                                                    <p className="flex justify-center items-center  font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                                        <ion-icon name="star" style={{ color: '#FBCEB1' }} ></ion-icon> {
                                                            rating.rate

                                                        }
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="p-6 pt-0">
                                                <Link to={`/detail/${id}`}
                                                    className="block w-full select-none rounded-lg
                                 bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans
                                  text-xs font-bold uppercase text-blue-gray-900 transition-all 
                                  hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 
                                  active:opacity-[0.85] disabled:pointer-events-none 
                                  disabled:opacity-50 disabled:shadow-none bg-slate-200"
                                                    type="button"
                                                >
                                                    View More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })

                }




            </section>

        </>

    )
}