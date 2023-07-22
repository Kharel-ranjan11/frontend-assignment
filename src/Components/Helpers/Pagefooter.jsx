import React from 'react'

export const Pagefooter = () => {
    return (
        <>

            <div style={{ width: '100%', background: 'red' }}>
                <footer className="text-center  text-lg-start  text-white pt-4 p-3 " style={{ backgroundColor: ' #0a4275' }}>
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="me-4 link-light">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </section>

                    <section className="">
                        <div className="container text-center text-md-start mt-4">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3 text-white"></i>Shop
                                    </h6>

                                </div>

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Electronic</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Sport Wear</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Women's Shoes</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Popular Dresses</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Gym Accessories</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Sport  Shoes</a>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 font-mono">
                                        Further info
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Home</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">About Us</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Shop Location</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">FAQs</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset font-mono">Contact</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3 text-white"></i> Nepal</p>
                                    <p>
                                        <i className="fas fa-envelope me-3 text-white"></i>
                                        ranjankharel@gmil.com
                                    </p>
                                    <p><i className="fas fa-phone me-3 text-white"></i> +977 52557 88</p>
                                    <p><i className="fas fa-print me-3 text-white"></i> +977 089426 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023  Copyright:
                        <a className="text-reset font-mono fw-bold" href="#">Developers</a>
                    </div>
                </footer>
            </div>
        </>
    )
}
