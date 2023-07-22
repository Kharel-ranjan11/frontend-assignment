import React from 'react'
import { Link } from 'react-router-dom'

export const NewCArd = ({ item }) => {
    console.log('From', item)
    return (
        <div className='pt-5 p-4 flex gap-11 justify-between align-middle'>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl
                 bg-blue-gray-500 bg-clip-border text-white shadow-md shadow-indigo-200 ">
                    <img
                        src={item.image}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className='p-6 '>
                    <div className=" flex ">
                        <span className="mb-2 flex-1 capitalize block font-mono text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {item.category}
                        </span>
                        <span className="block font-mono text-base font-light leading-relaxed text-inherit antialiased">
                            ${item.price}
                        </span>
                    </div>
                    <span className="block  h-36 customSCroll p-1  overflow-y-scroll text-justify font-mono text-base font-light leading-relaxed text-inherit antialiased">
                        {item.description}
                    </span>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/detail/${item.id}`}
                        className="select-none rounded-lg  border-2 hover:text-white border-indigo-500 hover:bg-indigo-500  py-3 px-6 text-center
                         align-middle font-mono text-xs font-bold uppercase  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg
                          hover:shadow-pink-500/40 focus:opacity-[0.85] 
                         focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        View Detail
                    </Link>
                </div>
            </div>
        </div>
    )
}
