import React from "react";
import './Databasesupport.css';
import datasupport1 from './datasupport1.jpg';
import cloudmigration1 from './cloudmigration1.jpg';
import versionmigration1 from './versionmigration1.jpg';
import databasemigration1 from './databasemigration1.jpg';
import storagemigration1 from './storagemigration1.jpg';
import applicationmigration1 from './applicationmigration1.jpg';




function DatabaseSupport() {
    return (
        <div className="bg " >
            <div className="body">
                {/* <img className="img img-fluid" src={workingpic} /> */}
                <div >
                    <div className="image-container">
                        <img src={datasupport1} className="img-fluid" alt="Database Support Services" style={{ width: "100%" }} />
                        <div className="overlay1"></div>
                        <div className="txtste">
                            <h2 className='text-xl text-lg-center text-xl-left text-center'>Database Support Services</h2>
                            <p className='Hp text-lg-center text-xl-left text-center'>Your Data, Our Expertise.</p>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mars1">
                <div className="fontsz">
                    <p className="paras">At Enormous IT, we recognize that a robust database environment is crucial for the efficient operation of any organization. Our Database Support Services are designed to ensure your databases are secure, reliable, and optimized for performance.</p>
                </div>

                <div className="headingssst hdclr">
                    <p >Our Comprehensive Offerings</p>
                </div>

                <div>

                    <div className="m1">
                        {/* <img className="sideimggss" style={{ borderRadius: 10 }} src={cloudmigration1} /> */}
                        <div className="fontsz">
                            <div className="rowss">
                            <div className="cardsdta">
                                <div>
                                    <li>
                                        <span>	<strong>	Database Administration: </strong> </span>
                                        <span> Our expert database administrators (DBAs) provide comprehensive management services, including installation, configuration, and ongoing maintenance. We ensure your databases are set up for optimal performance and security. </span>
                                    </li>
                                </div>
                            </div>
                            <div className="cardsdta">
                                <div>
                                    <li>
                                        <span >	<strong>	Performance Tuning:  </strong> </span>
                                        <span> We analyze your database systems to identify performance bottlenecks and implement targeted optimizations. Our goal is to enhance query performance and overall responsiveness, ensuring your applications run smoothly. </span>
                                    </li>
                                </div>
                            </div>
                            <div className="cardsdta">
                                <div>
                                    <li>
                                        <span >	<strong>	Backup and Recovery: </strong>  </span>
                                        <span> Data integrity is paramount. We implement robust backup strategies and disaster recovery solutions to safeguard your data. Our team ensures that your databases are backed up regularly and can be restored quickly in case of data loss.</span>
                                    </li>
                                </div>
                            </div>
                            </div>
                            <div className="rowss">
                            <div className="cardsdta">
                                <div>
                                    <li>
                                        <span ><strong>	Security Management:  </strong>  </span>
                                        <span> Protecting your sensitive data is our priority. We offer comprehensive security assessments, access control management, and vulnerability patching to ensure your databases are secure against potential threats.</span>
                                    </li>
                                </div>
                            </div>
                            <div className="cardsdta">
                                <div>
                                    <li>
                                        <span >	<strong>	Upgrades and Migrations:   </strong> </span>
                                        <span>Whether you’re looking to upgrade your database software or migrate to a new platform, we provide seamless support throughout the process. Our team minimizes downtime and ensures a smooth transition. </span>
                                    </li>
                                </div>
                            </div>
                            <div className="cardsdta">
                                <div>
                                    <li>
                                        <span >	<strong>	24/7 Monitoring and Support:    </strong> </span>
                                        <span>Our dedicated support team is available around the clock to monitor your database systems. We provide real-time alerts for any potential issues and offer prompt resolutions to keep your databases running optimally. </span>
                                    </li>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div >
                        <p className="headchoose">Why Choose Enormous IT ?</p>
                    </div>

                    <div className="disg">
                        <div className="fontsz clrbg pdg">
                            <div>
                                <li>
                                    <span >	<strong> Expert Team:  </strong>  </span>
                                    <span>Our experienced DBAs have a wealth of knowledge across various database platforms, including Oracle, SQL Server, MySQL, and more.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	<strong>	Tailored Solutions:  </strong></span>
                                    <span>We understand that every organization has unique database needs. Our services are customized to align with your specific requirements and business goals.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	<strong>	Proven Expertise:   </strong> </span>
                                    <span> With a history of successful database management projects, we have consistently delivered measurable improvements in performance, security, and reliability for our clients.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span ><strong>	Holistic IT Services: </strong>   </span>
                                    <span> Enormous IT offers a full range of IT services, allowing you to partner with a single provider for all your technology needs, from cloud solutions to performance tuning. </span>
                                </li>
                            </div>
                        </div>
                    </div>


                    <div >
                        <div>
                            <p className="headchoose">Contact Us Today!</p>
                            <p className="paras disg" >Ready to elevate your database management? Partner with Enormous IT for comprehensive Database Support Services. Contact us today to discover how we can enhance the performance and security of your database systems!</p>
                        </div>
                    </div>




                </div>













            </div>

        </div>
    )
}
export default DatabaseSupport;
