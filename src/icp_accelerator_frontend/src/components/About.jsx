import React, { useEffect, useState } from "react";
import imgRoadmap from '../../assets/images/imgRoadmap.png';
import astroSmall from '../../assets/images/astroSmall.png';
import astroBig from '../../assets/images/astroBig.png';
import rocketSmall from '../../assets/images/rocketSmall.png';
import rocketBig from '../../assets/images/rocketBig.png';

const About = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const getImageSource = () => {
      if (windowWidth <= 992) {
        return [astroSmall,rocketSmall];
      } else {
        return [astroBig,rocketBig];
      }
    };
   

    return (
        <div className="bg-body-secondary">
            <div className="container-fluid ps-5 pb-5 cs-pt-5" style={{ cursor: 'context-menu' }} id="about">
                <h1 className="font-ex-black about-heading">How it works</h1>
                <h2 className="font-ex-black about-heading">The Journey from an idea to an enterprise</h2>
            </div>
            <div className="" style={{ position: 'relative' }}>
                <img src={imgRoadmap} alt="" style={{ width: 'calc(101% + 1vw)', marginLeft: '-2%', marginTop: '-28%', marginBottom: '-20%' }} />
                <div className="d-flex roadmap-div-1">
                    <div className="d-flex justify-content-between">
                        <div className="w-100">
                            <div className="d-flex justify-content-end">
                            {windowWidth <= 767 ? <h6 className="font-ex-black about-heading mb-0">IDEATE</h6> : <h3 className="font-ex-black about-heading mb-0">IDEATE</h3>}
                            </div>
                            <div className="text-muted">
                                <p className="mb-0 roadmap-sm-txt">Entrepreneur participate in the ideathon/hackathon in their region organised by their ICP.Hub.<br />
                                    They are selected by peer rating based on our enterprise growth framework. <br />
                                    Any idea which is level 1 or above is selected for next phase </p>
                            </div>
                        </div>
                        <div className="">
                            <img src={getImageSource()[0]} alt="" className="roadmap-images" />
                        </div>
                    </div>
                </div>
                <div className="roadmap-div-2">
                    <div className="d-flex justify-content-end">
                        <div className="">
                            <img src={getImageSource()[0]} alt="" style={{ transform: 'scaleX(-1)' }} className="roadmap-images"  />
                        </div>
                        <div className="w-100">
                            <div className="d-flex">
                               {windowWidth <= 767 ?  <h6 className="font-ex-black about-heading mb-0">INCUBATED</h6> : <h3 className="font-ex-black about-heading mb-0">INCUBATED</h3>}
                            </div>
                            <div className="text-muted">
                                <p className="mb-0 roadmap-sm-txt">The projects after finishing 1 week orientation use the platform to setup their target level on <br />rubric for next 3 months. They choose the mentors, devshop and experts in return of a %of the <br /> equity. They publish their weekly progress on the platform and seek support from peers and <br /> mentors. Any project that builds the MVP and  is also rated level 3 or above on our enterprise <br /> growth framework qualifies to pitch to VC/Angels/Mentors</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex roadmap-div-3">
                    <div className="d-flex justify-content-between">
                        <div className="w-100">
                            <div className="d-flex justify-content-end">
                               {windowWidth <= 767 ? <h6 className="font-ex-black about-heading mb-0">ACCELERATED</h6> : <h3 className="font-ex-black about-heading mb-0">ACCELERATED</h3>}
                            </div>
                            <div className="text-muted">
                                <p className="mb-0 roadmap-sm-txt">Projects who receive investor funding in the previous round will move to the last 3 <br /> months of the program. Here they will get access to world renowned mentors for token <br /> economics, tech, regulations, GTM, product development, BM etc. There will be monthly <br /> demos followed by peer rating and review. Any enterprise that is rated level 5 or above <br />is eligible to be launched</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={getImageSource()[0]} alt="" className="roadmap-images"  />
                        </div>
                    </div>
                </div>
                <div className="roadmap-div-4">
                    <div className="d-flex justify-content-end">
                        <div className="">
                            <img src={getImageSource()[1]} alt="" className="roadmap-images" />
                        </div>
                        <div className="w-100 ms-3">
                            <div className="d-flex">
                                {windowWidth <= 767 ? <h6 className="font-ex-black about-heading mb-0">LAUNCHED</h6> : <h3 className="font-ex-black about-heading mb-0">LAUNCHED</h3>}
                            </div>
                            <div className="text-muted">
                                <p className="mb-0 roadmap-sm-txt">Do a final pitch for next round of funding for expansion and tokenization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default About;