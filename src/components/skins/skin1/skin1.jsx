import React from 'react';
import './skin1.css';

const Skin1 = (props) => {

  const {
    fname,
    lname,
    email,
    phone,
    street,
    city,
    pin,
    country,
    state,
    pSummary,
    hNo
  } = props.contactDetails;
  const {
    cCity,
    cName,
    cCountry,
    degree,
    yop,
    one,
    two,
    three
  } = props.educationDetails;
  const experienceDetails = props.experienceDetails;
  const experienceDetailsLocal = props.experienceDetailsLocal;

  return (
    <React.Fragment>
      <div className="skin1">
        <div className={props.contact ? "skin-one" : "skin-one"}>
          <h1>{fname}{' '}{lname}</h1>
          <div className="skin-one-two">
            {email} | {phone} | 1234-1234-1234
        </div>
          <div className="skin-one-three">
            {hNo}{' '}{street}{' '}{city}, {state}{' '}{pin}, {country}
          </div>
        </div>

        <div className={props.contact ? "skin-two" : "skin-two"}>
          <h3>PROFESSIONAL SUMMARY</h3>
          <hr />
          <p>{pSummary}</p>
        </div>

        <div className={props.contact ? "skin-three" : "skin-three"}>
          <h3>SKILLS</h3>
          <hr />
          <div className="skin-three-skills">
            <div className="skin-three-skills-one">
              <ul>
                {one && one.map(skill => {
                  return (
                    <li>{skill}</li>
                  )
                })}
                {/* <li>li</li>
              <li>li</li>
              <li>li</li>
              <li>li</li> */}
              </ul>
            </div>
            <div className="skin-three-skills-two">
              <ul>
                {two && two.map(skill => {
                  return (
                    <li>{skill}</li>
                  )
                })}
                {/* <li>li</li>
              <li>li</li>
              <li>li</li>
              <li>li</li> */}

              </ul>
            </div>
            <div className="skin-three-skills-three">
              <ul>
                {three && three.map(skill => {
                  return (
                    <li>{skill}</li>
                  )
                })}
                {/* <li>li</li>
              <li>li</li>
              <li>li</li>
              <li>li</li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className={props.contact ? "skin-four" : "skin-four"}>
          <h3>EXPERIENCE</h3>
          <hr />
          {experienceDetails.length && experienceDetails.map(exp => {
            return (
              <React.Fragment>
                <h4>{exp.cmName}</h4>
                <p>{exp.designation}{' '}{exp.sDate}{' '}{exp.sMonth}{'-'}{exp.eDate}{' '}{exp.eMonth}</p>
                <ul>
                  {exp.description && exp.description.map(li => {
                    return (
                      <li>
                        <p>{li}</p>
                      </li>
                    )
                  })}
                </ul>
              </React.Fragment>
            );

          })}
          
            
              
          {experienceDetailsLocal &&  experienceDetailsLocal.cmName && <h4>{experienceDetailsLocal.cmName}</h4>}
          {experienceDetailsLocal && <p>{ experienceDetailsLocal.designation && <span>{experienceDetailsLocal.designation}</span> }{' '}{ experienceDetailsLocal.sMonth && <span>{experienceDetailsLocal.sMonth}</span>}{' '}{experienceDetailsLocal.sYear && <span>{experienceDetailsLocal.sYear}</span>}{'-'}{experienceDetailsLocal.eMonth && <span>{experienceDetailsLocal.eMonth}</span>}{' '}{experienceDetailsLocal.eYear && <span>{experienceDetailsLocal.eYear}</span>}</p>}
          <ul>
            {experienceDetailsLocal && experienceDetailsLocal.description && experienceDetailsLocal.description.map(li => {
              return (
                <li>
                  <p>{li}</p>
                </li>
              )
            })}
            {experienceDetailsLocal && experienceDetailsLocal.descriptionTemp && <li><p>{experienceDetailsLocal.descriptionTemp}</p></li>}
          </ul>
              
            

          
          
          {/* {description &&  */}

          {/* <h4>Company name</h4>
        <p>date from when to when and something else</p>
        <ul>
          <li><p>did something</p></li>
          <li><p>did something</p></li>
          <li><p>did something</p></li>
        </ul>*/}
        </div>

        <div className={props.contact ? "skin-five" : "skin-five"}>
          <h3>EDUCATION</h3>
          <hr />
          <h4>{degree}</h4>
          <p>{cName}{' '}{cCity},{' '}{cCountry}{' - '}{yop}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skin1;
