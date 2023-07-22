import React from 'react'

export const PicSection = () => {
    return (
        <>

            <div className=' PHeight relative   overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1464666495445-5a33228a808e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
                    className='object-cover img-fluid'
                    alt="Ca.jpg" style={{ width: '100%' }} />
                <div className='absolute top-0 text-white flex flex-col  items-center justify-center  h-[100%] ' style={{ width: '100%', background: 'rgba(11, 14, 77, 0.303)' }} >
                    <h1 className='font-mono font-bold   fashionFont' >Fashion Hunt </h1>
                    <p className='font-mono font-bold  ShopFont'>Shop the Hottest Brands and Designs  at online <span  >Shop</span> </p>

                    <button className="learn-more animatedBtn">
                        <span className="circle" ariaHidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Grt In Touch</span>
                    </button>   </div>

            </div>
        </>
    )
}
