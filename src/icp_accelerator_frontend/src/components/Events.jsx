import React, { useEffect, useState } from "react";
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';

const Events = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  

    return (
            <div className="lightblue-bg">
                <div className="container">
                    <h1 className="font-black pt-5 pb-3 ms-5 font-best">Who should Join?</h1>
                </div>
                <div className={`row mx-0 justify-content-evenly pb-4 ${windowWidth <= 767 ? 'cs-wd-100' : ''}`}>
                    <div className="col-lg-4 col-md-12 col-sm-12 card rounded-4 text-muted font-sm my-2 mx-2 cs-wd" >
                        <div className="p-4 d-great">
                            <img src={img2} alt="" />
                            <span className="font-bold text-black font-great ms-2">Enterpreneurs/Projects</span>
                        </div>
                        <ul>
                            <li>They get world class one of its kind mentoring and experts</li>
                            <li>They get initial funding to build the MVP</li>
                            <li>They get end to end support to launch their enterprise and tokens</li>
                            <li>They have complete clarity on what they need to do to keep growing and receives hands-on feedback based on their growth on the framework</li>
                            <li>They are not competing against peers but collaborating</li>
                            <li>They don't need to go through any approval process or wait months to get required support to start working on their ideas</li>
                            <li>They have access to credential of VCs and mentors/experts/agencies and their past work on the platform to choose which one suits their need</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 card rounded-4 text-muted font-sm my-2 mx-2 cs-wd">
                    <div className="p-4 d-great">
                            <img src={img3} alt="" />
                            <span className="font-bold text-black font-great ms-2">Mentor/Experts</span>
                        </div>
                        <ul>
                            <li>They get to mentor new innovative ideas outside the regular crypto bubble</li>
                            <li>They get a % stake in the project</li>
                            <li>They have complete visibility on growth and progress of the project and have hands-on data to associate and dissociate from a project.</li>
                            <li>They get access to huge amount of projects at one place</li>
                            <li>They have their own credentials on the platform, so based on their success they can charge apremium</li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 card rounded-4 text-muted font-sm my-2 mx-2 cs-wd">
                    <div className="p-4 d-great">
                            <img src={img1} alt="" />
                            <span className="font-bold text-black font-great ms-2">VCs/Angles</span>
                        </div>
                        <ul>
                            <li>They get to invest with new innovative ideas outside the regular crypto bubble very early on or at a stage they are comfortable with</li>
                            <li>They can also get hand-on with the project by mentoring them if they don't want to invest right away</li>
                            <li>They have complete visibility on growth and progress of the project from its genesis and have deep on-chain insights on the project's and entrepreneur's growth along with mentors and experts associated. This reduce their anxiety on legitimacy of the project and due diligence</li>
                            <li>They get access to huge deal flow due to so many projects at one place and they don't need anyone permission to invest in these projects</li>
                            <li>There is no compulsion to invest to join the platform</li>
                            <li>They have their own credentials on the platform, so based on their success they can charge a premium</li>
                            <li>This allows even smaller investors especially traditional non-native web3 ones to participate as they get complete transparency</li>
                        </ul>
                    </div>
                </div>


            </div>
    );
};

export default Events;