import React, { useEffect, useState } from 'react';
import pimg1 from '../../assets/images/pimg1.png'
import pimg2 from '../../assets/images/pimg2.png'
import pimg3 from '../../assets/images/pimg3.png'
import pimg4 from '../../assets/images/pimg4.png'
import pimg5 from '../../assets/images/pimg5.png'
import pimg6 from '../../assets/images/pimg6.png'
import globeSvg from '../../assets/globeSvg.svg';
import imgLogo from '../../assets/images/imgLogo.png';
import location from '../../assets/images/location.svg';



const Projects = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getText = (val) => {
        if (windowWidth >= 1200) {
            return <h1 className='about-heading font-black'>{val}</h1>
        } else if (windowWidth > 991 && windowWidth < 1200) {
            return <h3 className='about-heading font-black'>{val}</h3>
        } else if (windowWidth > 766 && windowWidth < 992) {
            return <h5 className='about-heading font-black'>{val}</h5>
        } else if (windowWidth < 767) {
            return <p className='about-heading font-black mb-0'>{val}</p>

        }
    }

    const getJoinDiv = (val) => {
        if (windowWidth >= 992) {
            return <div className="font-ex-black cs-bg-blue-box rounded-3 p-3" style={{ fontSize: 'large' }} >{val}</div>
        } else if (windowWidth > 575 && windowWidth < 992) {
            return <div className="font-ex-black cs-bg-blue-box rounded-3 p-2 px-3" style={{ fontSize: 'large' }}>{val}</div>
        } else if (windowWidth < 575) {
            return <div className="font-ex-black cs-bg-blue-box rounded-3 p-1 px-3" style={{ fontSize: 'smaller' }}>{val}</div>
        }
    }

    return (
        <div className="cs-bg-body">
            <div className='d-grid pt-4 container mb-5'>
                <h1 className='about-heading font-ex-black'>Asia Alliance-Accelerator</h1>
                <h5 className="font-regular text-muted">We'll help you navigate the idiosyncrasies of Web3 and avoid costly <br /> mistakes. We're here to support you, day and night.</h5>
            </div>
            <div className='d-flex justify-content-center align-items-baseline projects-card-container mb-3'>
                <img src={pimg1} alt="" className={`projects-card-img-1-3 shadow-lg ${windowWidth < 992 ? 'rounded-3' : 'rounded-4'}`} />
                <img src={pimg2} alt="" className={`projects-card-img-2 shadow-lg ${windowWidth < 992 ? 'rounded-3' : 'rounded-4'}`} />
                <img src={pimg3} alt="" className={`projects-card-img-1-3 shadow-lg ${windowWidth < 992 ? 'rounded-3' : 'rounded-4'}`} />
            </div>
            <div className='d-flex justify-content-center align-items-start projects-card-container mb-5'>
                <img src={pimg4} alt="" className={`projects-card-img-4-6 shadow-lg ${windowWidth < 992 ? 'rounded-3' : 'rounded-4'}`} />
                <img src={pimg5} alt="" className={`projects-card-img-5 shadow-lg ${windowWidth < 992 ? 'rounded-3' : 'rounded-4'}`} />
                <img src={pimg6} alt="" className={`projects-card-img-4-6 shadow-lg ${windowWidth < 992 ? 'rounded-3' : 'rounded-4'}`} />
            </div>
            <div className={(windowWidth > 767) ? 'container bg-white rounded-4 p-5 pb-4 mt-5 d-flex justify-content-around align-items-center shadow-lg' : 'container bg-white rounded-4 p-5 pb-4 mt-5 d-grid align-items-center shadow-lg w-75'}>
                {(windowWidth < 767) ?
                    <div className='mb-2 d-flex flex-column justify-content-center' >
                        <div className='text-center'>{getText('Our goal is to bring Web3 to everyone by revolutionizing the way Web3 ideas becomes business at scale')} </div>
                    </div> : <div>
                        <div className='text-center'>{getText('Our goal is to bring Web3 to everyone')} </div>
                        <div className='text-center'>{getText('by revolutionizing  the way Web3')} </div>
                        <div className='text-center'>{getText('ideas becomes business at scale')} </div></div>}
                <div className='d-flex justify-content-center'>
                    {getJoinDiv('Join the revolution today')}
                </div>
            </div>
            <div className='container mt-5'>
                <h1 className='font-ex-black about-heading font-beast'>Our Upcoming</h1>
                <h1 className='font-ex-black about-heading'>Alliance</h1>
                <h5 className="font-regular text-muted">We'll help you navigate the idiosyncrasies of Web3 and avoid costly <br /> mistakes. We're here to support you, day and night.</h5>
            </div>
            <div className='container-fluid text-center'>
                <div className='mt-5' style={{ position: 'relative' }}>
                    <img src={globeSvg} alt="" className='cs-globe' />
                    <div className='cs-globe-location-1 d-grid'>
                        <div className='d-flex justify-content-center'>
                            <img src={location} alt="" className='cs-globe-location-img' />
                        </div>
                        <span className='text-white font-ex-black cs-globe-location-txt'>ICP.NA <br /> Alliance</span>
                    </div>
                    <div className='cs-globe-location-2 d-grid'>
                        <div className='d-flex justify-content-center'>
                            <img src={location} alt="" className='cs-globe-location-img' />
                        </div>
                        <span className='text-white font-ex-black cs-globe-location-txt'>ICP.Latam <br /> Alliance</span>
                    </div>
                    <div className='cs-globe-location-3 d-grid'>
                        <div className='d-flex justify-content-center'>
                            <img src={location} alt="" className='cs-globe-location-img' />
                        </div>
                        <span className='text-white font-ex-black cs-globe-location-txt'>ICP.Africa <br /> Alliance</span>
                    </div>
                    <div className='cs-globe-location-4 d-grid'>
                        <div className='d-flex justify-content-center'>
                            <img src={location} alt="" className='cs-globe-location-img' />
                        </div>
                        <span className='text-white font-ex-black cs-globe-location-txt'>ICP.GCC <br /> Alliance</span>
                    </div>
                    <div className='cs-globe-location-5 d-grid'>
                        <div className='d-flex justify-content-center'>
                            <img src={location} alt="" className='cs-globe-location-img' />
                        </div>
                        <span className='text-white font-ex-black cs-globe-location-txt'>ICP.Asia <br /> Alliance</span>
                    </div>
                    <div className='cs-globe-location-6 d-grid'>
                        <div className='d-flex justify-content-center'>
                            <img src={location} alt="" className='cs-globe-location-img' />
                        </div>
                        <span className='text-white font-ex-black cs-globe-location-txt'>ICP.EU <br /> Alliance</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='container-fluid text-center justify-content-center' style={{ paddingBottom: '200px' }}>
                    <h3 className='font-regular mt-5 pt-5'>Powered By</h3>
                    <img src={imgLogo} alt="" className='mt-3' style={{ width: 'calc(35% + 1vw)' }} />
                    <h5 className="font-regular mt-4">ICP ecosystems are forming and taking shape in various regions around <br /> the globe, bringing entrepreneurs, developers, venture capitalists, <br /> educators, enthusiasts and experts under one regional roof.</h5>
                    <h3 className='font-ex-black mt-5'>KNOW MORE ABOUT EXISTING ICP.HUBS</h3>
                    <div className='d-flex justify-content-center'>
                        <div className="home-signup mt-4 font-ex-black">
                            <h4 className="m-0">internetcomputer.org/community</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;