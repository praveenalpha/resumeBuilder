import React from 'react';
import './skin2.css';

const Skin2 = (props) => {

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
    <div className="skin2">
      <div className={props.contact ? "skin2-one-contact" : "skin2-one-contact"}>
        <div className="skin2-one-inner-one">
          <div className="skin2-one-one">
            <div className="skin2-one-one-one">{fname.charAt(0)}</div>
            <div className="skin2-one-one-two">{lname.charAt(0)}</div>
          </div>
          <div className="skin2-one-two">
            <h1>{fname}{' '}{lname}</h1>
          </div>
        </div>
        <div className="skin2-one-three">
          <div className="skin2-one-three-one">
            {hNo}{' '}{street}{' '}{city}, {state}{' '}{pin}, {country}

          </div>
          <div className="skin2-one-three-two">
            {phone}
          </div>
          <div className="skin2-one-three-three">
            {email}
          </div>
        </div>
      </div>

      <div className="skin2-two-contact">
        <h3>PROFESSIONAL SUMMARY</h3>
        <hr />
        <p>{pSummary}</p>
      </div>

      <div className="skin2-three-contact">
        <h3>SKILLS</h3>
        <hr />
        <div className="skin2-three-skills">
          <div className="skin2-three-skills-one">
            <ul>
              {one && one.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}
            </ul>
          </div>
          <div className="skin2-three-skills-two">
            <ul>
              {two && two.map(skill => {
                return (
                  <li>{skill}</li>
                )
              })}

            </ul>
          </div>
          <div className="skin2-three-skills-three">
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

      <div className="skin2-four-contact">
        <h3>EXPERIENCE</h3>
        <hr />
        {experienceDetails.length && experienceDetails.map(exp => {
          return (
            <React.Fragment>
              <div className="skin2-four-contact-upper">
                <div className="skin2-four-contact-upper-one">
                  <h4>{exp.cmName}</h4>
                  <p>{exp.designation}</p>
                </div>
                <div className="skin2-four-contact-upper-two">
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
        {experienceDetailsLocal && <div className="skin2-four-contact-upper">
          <div className="skin2-four-contact-upper-one">
            {experienceDetailsLocal.cmName && <h4>{experienceDetailsLocal.cmName}</h4>}
            {experienceDetailsLocal.designation && <p>{experienceDetailsLocal.designation}</p>}
          </div>
          
          <div className="skin2-four-contact-upper-two">
            <p>{experienceDetailsLocal.sMonth && <span>{experienceDetailsLocal.sMonth}</span> }{experienceDetailsLocal.sYear && <span>{experienceDetailsLocal.sYear}</span> }{'-'}{experienceDetailsLocal.eMonth && <span>{experienceDetailsLocal.eMonth}</span> }{experienceDetailsLocal.eYear && <span>{experienceDetailsLocal.eYear}</span>}</p>
          </div>
        </div>
        }
        <ul>
          { experienceDetailsLocal && experienceDetailsLocal.description && experienceDetailsLocal.description.map(li => {
            return (
              <li>
                <p>{li}</p>
              </li>
            )
          })
          }
          {experienceDetailsLocal && experienceDetailsLocal.descriptionTemp && <li><p>{experienceDetailsLocal.descriptionTemp}</p></li>}
        </ul>
          
      </div>
        

      <div className="skin2-five-contact">
        <h3>EDUCATION</h3>
        <hr />
        <div className="skin2-five-contact-inner">
          <div className="skin2-five-contact-inner-one">
            <h4>{degree}</h4>
            <p>{cName}{' '}{cCity},{' '}{cCountry}</p>
          </div>
          <div className="skin2-five-contact-inner-two">{yop}</div>
        </div>
      </div>
    </div>
  );
};

export default Skin2;
