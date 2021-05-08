import React from 'react';
import './skin3.css';

const Skin3 = (props) => {

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
    <div className="skin3">
      <div className="skin3-one">
        <div className="skin3-one-one">
          <h1>{fname.charAt(0)}{lname.charAt(0)}</h1>
        </div>
        <div className="skin3-one-two">
          <h1>{fname}{' '}{lname}</h1>
          <p>{hNo}{' '}{street}{' '}{city}{' '}{state}{' '}{pin}{' '}{country}{phone}{' '}{email}</p>
        </div>
      </div>

      <div className="skin3-two">
        <div className="skin3-two-one">
          PROFESSIONAL SUMMARY
        </div>
        <div className="skin3-two-two">
          <p>{pSummary}</p>
        </div>
      </div>

      <div className="skin3-three">
        <div className="skin3-three-one">
          SKILLS
        </div>
        <div className="skin3-three-two">
          <div className="skin3-three-skills-one">
            <ul>
              {one && one.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}
            </ul>
          </div>
          <div className="skin3-three-skills-two">
            <ul>
              {two && two.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}

            </ul>
          </div>
          <div className="skin3-three-skills-three">
            <ul>
              {three && three.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="skin3-four">

        EXPERIENCE
          <div className="skin3-four-inner">
          {experienceDetails.length && experienceDetails.map(exp => {
            return (
              <React.Fragment>
                <div className="skin3-four-contact-upper">
                  <div className="skin3-four-contact-upper-one">
                    <h4>{exp.cmName}</h4>
                    <p>{exp.designation}</p>
                  </div>
                  <div className="skin3-four-contact-upper-two">
                    <p>{exp.sMonth}{exp.sYear}{'-'}{exp.eMonth}{exp.eYear}</p>
                  </div>
                </div>
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
          {experienceDetailsLocal &&
            <div className="skin3-four-contact-upper">
              <div className="skin3-four-contact-upper-one">
                {experienceDetailsLocal.cmName && <h4>{experienceDetailsLocal.cmName}</h4>}
                {experienceDetailsLocal.designation && <p>{experienceDetailsLocal.designation}</p>}
              </div>
              <div className="skin3-four-contact-upper-two">
                <p>{experienceDetailsLocal.sMonth && <span>{experienceDetailsLocal.sMonth}</span> }{experienceDetailsLocal.sYear && <span>{experienceDetailsLocal.sYear}</span>}{'-'}{experienceDetailsLocal.eMonth && <span> {experienceDetailsLocal.eMonth}</span>}{experienceDetailsLocal.eYear && <span> {experienceDetailsLocal.eYear}</span>}</p>
              </div>
            </div>
          }
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
        </div>
      </div>

      <div className="skin3-five">
        EDUCATION
        <div className="skin3-five-inner">
          <h4>{yop}</h4>
          <p>{degree}</p>
          <p>{cName}{' '}{cCity},{' '}{cCountry}</p>
        </div>
      </div>
    </div>
  );
};

export default Skin3;
