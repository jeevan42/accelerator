import React from "react";
import astroRegular from '../../assets/images/astroRegular.png';

const Home = () => {

  return (
    <div className="lightblue-bg pt-5" id="home">
      <div className="container">
        <div className="row mt-4" style={{ paddingBottom: '45px' }}>
          <div className="col-lg-7 col-md-12 col-sm-12 py-4">
            <h1 className="fw-bold font-ex-black">Introducing</h1>
            <h1 className="home-subheading font-ex-black">Apollo 11</h1>
            <h4 className="fw-lighter mt-4 home-text font-regular">World's 1st fully On-chain, Decentralised, Permissionless, <br /> Transparent and Non-Competitive Incubator cum Accelerator</h4>
            <div className="home-signup fw-bold mt-4 font-ex-black"> <h4 className="m-0">JOIN THE ODYSSEY</h4></div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
              <img src={astroRegular} alt="" className="astro-home"/>
          </div>
        </div>
        <div className='container' style={{ position: 'relative' }}>
          <div className='bg-white rounded-4 p-5 pb-4 mt-5 shadow-lg w-100' style={{ position: 'absolute', top: '-100px', left: '0' }}>
            <h1 className='font-ex-black about-heading ps-4'>By Dec 2024</h1>
            <div className="row justify-content-lg-between">
              <div className="col-lg-2 text-center mt-3">
                <div className="d-flex justify-content-center">
                  <h1 className='font-ex-black about-heading'>10K</h1>
                </div>
                <h5 className="font-regular text-muted">Entrepreneur <br /> Engaged</h5>
              </div>
              <div className="col-lg-2 text-center mt-3">
                <div className="d-flex justify-content-center">
                  <h1 className='font-ex-black about-heading'>5K</h1>
                </div>
                <h5 className="font-regular text-muted">Ideas <br /> Selected</h5>
              </div>
              <div className="col-lg-2 text-center mt-3">
                <div className="d-flex justify-content-center">
                  <h1 className='font-ex-black about-heading'>500</h1>
                </div>
                <h5 className="font-regular text-muted">Projects <br /> Incubated</h5>
              </div>
              <div className="col-lg-2 text-center mt-3">
                <div className="d-flex justify-content-center">
                  <h1 className='font-ex-black about-heading'>50</h1>
                </div>
                <h5 className="font-regular text-muted">Enterprise <br /> Accelerated</h5>
              </div>
              <div className="col-lg-2 text-center mt-3">
                <div className="d-flex justify-content-center">
                  <h1 className='font-ex-black about-heading'>XX</h1>
                </div>
                <h5 className="font-regular text-muted">Million Dollors <br />In Funding</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;