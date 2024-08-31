import React, { useState } from "react";
import './Careers.css'; // Import the CSS file
import Careers1 from '../MyCareers/Careers1.jpg';

function Crs() {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="bg">
            <div className="image-container">
                <img src={Careers1} className="img" alt="Technology" />
                <div className="overlaycareers"></div>
                <div className="txtcareers">
                    <p className='parsgh-heading'>Careers</p>
                    <p className='parsgh-subheading'>Your Future Starts Here</p>
                </div>
            </div>

            <div className="careers-container">
                <section className="section">
                    <p className='parsgh-heading'>WHY ENORMOUS?</p>
                    <p className='parsgh'>
                        Choosing to work at Enormous IT Pvt. Ltd. is a decision that promises an enriching and dynamic career. Renowned for its innovative solutions and cutting-edge technology, the company offers employees an environment that fosters growth and creativity. At Enormous IT, you'll be part of a team that values collaboration, diversity, and continuous learning, ensuring that you stay ahead in the rapidly evolving tech landscape. With competitive compensation, comprehensive benefits, and a commitment to work-life balance, the company ensures that your personal and professional needs are met. Joining Enormous IT Pvt. Ltd. means being part of a forward-thinking company that invests in its people, values their contributions, and empowers them to reach their full potential.
                    </p>
                </section>

                <section className="section">
                    <p className='parsgh-heading'>Our Employee Benefits</p>
                    <div className="benefits-cards">
                        <div className="careers-card">
                            <p className='parsgh-heading'><strong>Health Insurance</strong></p>
                            <p className='parsgh'>Comprehensive health insurance plans for you and your family.</p>
                        </div>
                        <div className="careers-card">
                            <p className='parsgh-heading'>Retirement Plans</p>
                            <p className='parsgh'>Competitive retirement savings plans to secure your future.</p>
                        </div>
                        <div className="careers-card">
                            <p className='parsgh-heading'>Work-Life Balance</p>
                            <p className='parsgh'>Flexible working hours and remote work options.</p>
                        </div>
                        <div className="careers-card">
                            <p className='parsgh-heading'>Professional Development</p>
                            <p className='parsgh'>Opportunities for continuous learning and career advancement.</p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <p className='parsgh-heading'>Inactive Job Openings (Positions filled)</p>
                    <div className="job-cards">
                        <div className="careers-card">
                            <p className='parsgh-heading'>Position Title 1</p>
                            <p className='parsgh'>Description of the position that was filled.</p>
                        </div>
                        <div className="careers-card">
                            <p className='parsgh-heading'>Position Title 2</p>
                            <p className='parsgh'>Description of the position that was filled.</p>
                        </div>
                        <div className={`careers-card ${showMore ? 'show' : 'hide'}`}>
                            <p className='parsgh-heading'>Position Title 3</p>
                            <p className='parsgh'>Description of the position that was filled.</p>
                        </div>
                        <div className={`careers-card ${showMore ? 'show' : 'hide'}`}>
                            <p className='parsgh-heading'>Position Title 4</p>
                            <p className='parsgh'>Description of the position that was filled.</p>
                        </div>
                        {showMore && (
                            <>
                                <div className="careers-card show">
                                    <p className='parsgh-heading'>Position Title 5</p>
                                    <p className='parsgh'>Description of the position that was filled.</p>
                                </div>
                                <div className="careers-card show">
                                    <p className='parsgh-heading'>Position Title 6</p>
                                    <p className='parsgh'>Description of the position that was filled.</p>
                                </div>
                            </>
                        )}
                    </div>
                    <button className="show-more-button" onClick={handleShowMore}>
                        {showMore ? 'Show Less' : 'Show More >'}
                    </button>
                </section>

                <section className="section">
                    <p className='parsgh-heading'>Active Job Openings</p>
                    <p className='parsgh'>
                        At Enormous IT Pvt Ltd, we are constantly on the lookout for talented individuals to join our innovative and dynamic team. We offer a diverse range of opportunities that cater to various skill sets and career aspirations. Our commitment to fostering a supportive and inclusive work environment ensures that you will have the resources and support needed to excel in your role. Ready to take the next step in your career? Click the button below to discover our current job openings and see how you can be a part of our exciting journey.
                    </p>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.naukri.com/enormous-it-services-jobs-careers-1505082'>
                        <button className="explore-button">Explore Job Openings</button>
                    </a>
                </section>
            </div>
        </div>
    );
}

export default Crs;
