import React, { useState } from "react";
import "./Crs.css"; // Import the CSS file
import Careers1 from "../MyCareers/Careers1.jpg";

function Careers() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  //  inactive positions
  const inactivePositions = [
    "Kubernetes Administrator",
    "SOA & WebLogic Administrator",
    "Data Engineer",
    "Java Full Stack Developer",
    "Fusion Oracle Integration",
    "Oracle Cloud Integration",
    "Ppm Developer",
    "Database Administrator Requirement",
    "Senior ADF Developer",
    "CX implementation Specialist",
    "Cpp Developer",
    "Cloud consultant",
    "Migration Of Data from MS SQL Server",
    "Oracle Apex Developer",
    "Oracle Apps Developer (e-Business Suite)",
    "Power Bi Developer",
    "Database Conversion Specialist",
    "EPM Lead - PCMCS",
    "EPM Lead - EDMCS",
    "Epm Consultant",
    "EPM Lead - TRCS",
    "EPM Lead - ARCS",
    "Oracle OIC",
    "Integration Consultant - OIC, PCS, SOA, OSB",
    "It Recruiter",
    "Technical Business Analyst",
    "Project Manager",
    "React JS Developer",
    "Quality Analyst",
    "Oracle Fusion Planning Cloud consultant",
    "Identity and Access Management lead",
    "Oracle Apex Lead Developer",
    "EBS SCM Functional Consultant",
    "Bid Manager",
    "ODI Lead Consultant",
    "OIC Developer",
    "Senior Technical Support Engineer",
    "Test Manager",
    "Microsoft SQL Server DBA",
    "Oracle WebCenter Content Management",
    "Oracle Ebs Functional Consultant",
    "Oracle DBA with AVDF",
    "Oracle Tuxedo Admin",
    "Fusion Middleware Administrator",
    "Technical Project Manager",
    "Fusion Finance Functional Consultant",
    "Oracle WebCenter Sites",
    "Bi Publisher",
    "Peoplesoft Administrator",
    "Linux System Administrator",
    "Oracle Database Administrator",
    "EBS Oracle Application DBA",
    "Fusion Financials Lead",
    "Functional Consultant",
    "Angular/React Js/React Native Developer",

  ];

  const visibleCount = showMore ? inactivePositions.length : 9;

  return (
    <div className="bg">
      <div className="image-container">
        <img src={Careers1} className="img" alt="Careers" />
        <div className="overlay"></div>
        <div className="txt">
          {/* <h2 className="text-xl text-lg-center text-xl-left text-center">
            My Careers
          </h2>
          <p className="Hp text-lg-center text-xl-left text-center">
          Your Future Starts Here
          </p> */}
        </div>

        <div className="careers-container">
          <section className="section">
            <p className="parsgh-heading">WHY ENORMOUS?</p>
            <p className="parsgh">
              Choosing to work at Enormous IT Pvt. Ltd. is a decision that
              promises an enriching and dynamic career. Renowned for its
              innovative solutions and cutting-edge technology, the company
              offers employees an environment that fosters growth and
              creativity. At Enormous IT, you'll be part of a team that values
              collaboration, diversity, and continuous learning, ensuring that
              you stay ahead in the rapidly evolving tech landscape. With
              competitive compensation, comprehensive benefits, and a commitment
              to work-life balance, the company ensures that your personal and
              professional needs are met. Joining Enormous IT Pvt. Ltd. means
              being part of a forward-thinking company that invests in its
              people, values their contributions, and empowers them to reach
              their full potential.
            </p>
          </section>

          <section className="section">
            <p className="parsgh-heading">Our Employee Benefits</p>
            <div className="benefits-cards">
              <div className="careers-card">
                <p className="parsgh-subheading">
                  <strong>Health and Wellness</strong>
                </p>
                <p className="parsgh">
                Comprehensive health insurance plans covering medical care for employees.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading">
                  <strong>Paid Time Off</strong>
                </p>
                <p className="parsgh">
                Generous leave policy that ensures you have ample time to recharge and attend to personal matters.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading">
                  <strong>Professional Development</strong>
                </p>
                <p className="parsgh">
                Opportunities for continuous learning and career growth, including training programs, workshops, and upskilling initiatives.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading">
                  <strong>Retirement Plans</strong>
                </p>
                <p className="parsgh">
                Secure your future with our retirement benefits, including provident fund contributions and pension schemes.
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading">
                  <strong>Work-Life Balance</strong>
                </p>
                <p className="parsgh">
                Flexible work arrangements and a balanced five-day workweek, promoting a healthy work-life balance.                
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading">
                  <strong>Performance Bonuses</strong>
                </p>
                <p className="parsgh">
                Competitive salary packages with regular performance-based bonuses and incentives, recognizing and rewarding your hard work and dedication.                
                </p>
              </div>
              <div className="careers-card">
                <p className="parsgh-subheading">
                  <strong>Inclusive Work Environment</strong>
                </p>
                <p className="parsgh">
                A diverse and inclusive workplace where everyone is valued and respected, fostering a collaborative and innovative culture.               
                </p>
              </div>


            </div>
          </section>

          <section className="section">
            <p className="parsgh-heading">Inactive Job Openings</p>
            <ul className="job-list">
              {inactivePositions
                .slice(0, visibleCount)
                .map((position, index) => (
                  <li key={index} className="job-item">
                    {position}
                  </li>
                ))}
            </ul>
            <button className="show-more-button" onClick={handleShowMore}>
              {showMore ? "Show Less" : "Show More >"}
            </button>
          </section>

          <section className="section">
            <p className="parsgh-heading">Active Job Openings</p>
            <p className="parsgh">
              At Enormous IT Pvt Ltd, we are constantly on the lookout for
              talented individuals to join our innovative and dynamic team. We
              offer a diverse range of opportunities that cater to various skill
              sets and career aspirations. Our commitment to fostering a
              supportive and inclusive work environment ensures that you will
              have the resources and support needed to excel in your role. Ready
              to take the next step in your career? Click the button below to
              discover our current job openings and see how you can be a part of
              our exciting journey.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.naukri.com/enormous-it-services-jobs-careers-1505082"
            >
              <button className="explore-button">Explore Job Openings</button>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Careers;
