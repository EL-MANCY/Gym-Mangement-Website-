import React from 'react'

export default function Foot() {
    return (
        <>
            <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
                <footer>
                    <div className="row my-2 justify-content-center py-5">
                        <div className="col-11">
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                    <h3 className="mb-md-0 mb-5 bold-text text-warning">EAGLES</h3>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 bold-text text-warning"><b>MENU</b></h6>
                                    <ul className="list-unstyled">
                                        <li>Home</li>
                                        <li>Contact</li>
                                        <li>Events</li>
                                        <li>Shop</li>
                                        <li>Registration</li>
                                        <li>About</li>
                                    </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <h6 className="mb-3 mb-lg-4 bold-text mt-sm-0 mt-5 text-warning"><b>ADDRESS</b></h6>
                                    <p className="mb-1">15 , EGYPT , MENOFIA</p>
                                    <p>SHEBEEN EL-KOM</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                   <small className="rights"><span>&#174;</span> Pepper All Rights Reserved to FCI MINUFIA STUDIENTS.</small>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                    <h6 className="mt-55 mt-2 text-warning bold-text"><b>ANIRUDH SINGLA</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> user@gmail.com</small>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                    <h6 className="text-warning bold-text"><b>RISHABH SHEKHAR</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span> user@gmail.com</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div> 
        </>
    )
}
