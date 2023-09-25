import React, { useEffect, useState } from "react";
import bigLogo from '../../assets/bigLogo.png';
import icpLogo2 from '../../assets/icpLogo2.png';

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <div className="bg-white full-screen-child">
                <div className="container" id="contact" style={{ position: 'relative' }}>
                    {(windowWidth > 992) ? <div className='box-best w-100 rounded-5 p-5 pb-4 mt-5 d-flex justify-content-evenly align-items-center shadow-lg' style={{ position: 'absolute', top: '-300px', left: '0' }}>
                        <div className={`w-25 ${windowWidth < 1280 ? 'ms--4' : 'ps-4'}`}>
                            <img src={bigLogo} alt="" />
                        </div>
                        <div className="w-75">
                            <h1 className="font-bold">Stay in loop!</h1>
                            <h5 className="font-regular">Get a weekly overview of the crypto market, updates about Outlier <br /> Ventures, exclusive invites to upcoming events, plus a selection of <br /> fresh job opportunities from our OV Ecosystem Careers page.</h5>
                            <input type="text" className="form-control bg-transparent p-2 mt-4 w-75" placeholder="Your Email" />
                            <div className="bg-white rounded-3 mt-3" style={{ width: 'fit-content' }}>
                                <h4 className="font-ex-black footer-submit p-2">SUBMIT</h4>
                            </div>
                        </div>
                    </div> :
                        <div className='box-best w-100 rounded-5 p-5 pb-4 mt-5 d-flex flex-column justify-content-evenly align-items-center shadow-lg' style={{ position: 'absolute', top: '-300px', left: '0' }}>
                            <div className="mb-4">
                                <img src={bigLogo} alt="" />
                            </div>
                            <div className="">
                                <h1 className="font-bold">Stay in loop!</h1>
                                {windowWidth < 767 ? <h7 className="font-regular">Get a weekly overview of the crypto market, updates about Outlier Ventures, exclusive invites to upcoming events, plus a selection of fresh job opportunities from our OV Ecosystem Careers page.</h7> : <h5 className="font-regular">Get a weekly overview of the crypto market, updates about Outlier Ventures, exclusive invites to upcoming events, plus a selection of fresh job opportunities from our OV Ecosystem Careers page.</h5>}
                                <input type="text" className="form-control bg-transparent p-2 mt-4" placeholder="Your Email" />
                                <div className="bg-white rounded-3 mt-3" style={{ width: 'fit-content' }}>
                                    <h4 className="font-ex-black footer-submit p-2">SUBMIT</h4>
                                </div>
                            </div>
                        </div>}
                    <div className="row justify-content-evenly pb-3" style={{ marginTop: '8rem', paddingTop: windowWidth > 992 ? '10rem' : '20rem' }}>
                        <div className={`col-4 text-black footer-logo ${windowWidth < 767 ? 'd-none' : ''}`}>
                            <img src={icpLogo2} alt="" style={{ width: '100%' }} />
                            <span className="d-block mt-2">© ICP. All Rights Reserved.</span>
                        </div>
                        <div className="col txt-blue">
                            {windowWidth > 992 ? <h1 className="font-bold">Services</h1> : <h3 className="font-bold" style={{ fontSize: 'revert' }}>Services</h3>}
                            <ul className="ps-0 footer-ul" style={{ listStyle: 'none' }}>
                                <li className="font-regular footer-ul-li"><a target="blank" href="http://outlierventures.io/base-camp/">Base Camp</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/ascent/">Ascent</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/elevate/">Elevate</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/investors/">Investors</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/partners/">Partners</a></li>
                            </ul>
                        </div>
                        <div className="col txt-blue">
                            {windowWidth > 992 ? <h1 className="font-bold">Company</h1> : <h3 className="font-bold" style={{ fontSize: 'revert' }}>Company</h3>}
                            <ul className="ps-0" style={{ listStyle: 'none' }}>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/about-us/">About us</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/offices/">Offices</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/news/">News</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/mission-and-values/">Mission & Values</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.bamboohr.com/careers">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col txt-blue">
                            {windowWidth > 992 ? <h1 className="font-bold">Legal</h1> : <h3 className="font-bold" style={{ fontSize: 'revert' }}>Legal</h3>}
                            <ul className="ps-0" style={{ listStyle: 'none' }}>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/privacy-policy/">Privacy Policy</a></li>
                                <li className="font-regular footer-ul-li"><a target="blank" href="https://outlierventures.io/terms-and-conditions/">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`d-grid text-center flex-column justify-content-center text-black ${windowWidth > 766 ? 'd-none' : ''}`}>
                        <div>
                            <img src={icpLogo2} alt="" className="w-50" />
                        </div>
                        <span className="d-block mt-2">© ICP. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;