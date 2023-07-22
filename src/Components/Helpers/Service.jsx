import React from 'react'

export const Service = () => {
    return (
        <>
            <section className="p-3 " style={{ backgroundColor: 'aliceblue' }} >
                <div className="container-fluid text-center" id="features">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4  ">
                        <div className="col p-2 line "><h5 ><i className="me-2 fas fa-check"></i><span className='font-bold font-mono'>Quality Product</span></h5></div>
                        <div className="col p-2 line "><h5 ><i className="me-2 fas fa-truck"></i><span className='font-bold font-mono'>Free Shipping</span></h5></div>
                        <div className="col p-2 line "><h5 ><i className="me-2 fas fa-exchange-alt"></i><span className='font-bold font-mono'>14-Day Return</span></h5></div>
                        <div className="col p-2 line "><h5 ><i className="me-2 fas fa-phone"></i><span className='font-bold font-mono'>24/7 Support</span></h5></div>
                    </div>
                </div>
            </section>
        </>
    )
}
