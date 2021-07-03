<h1 align="center"> Resume Builder </h1> 
<p align="right">54 active users on deployed link -> https://modest-mcnulty-ed123d.netlify.app/<p>
<p align="center">Created a web application Resume Builder where user signup/signin to firebase, then they are allowed to select a resume of theire choice and then edit it while watching the resume being updating on side. Then users information is stored on redux store so that all react components can get information from same place. Finally user can download pdf of their resume or just save their selected resumes and information on firebase cloud. Used redux state manegement tool(only used post request twice in whole application, when user signup/signin and in last download/save to database option) which allowed my application to never slow down while using it.
<h2>Learned And Used </h2>
<ul>
  <li>ReactJS Class Components</li>
  <li>React Redux for state manegement</li>
  <li>Thunk for async call actions in redux </li>
  <li>Material UI for styled buttons and input box</li>
  <li>Framer-Motion for animating UI</li>
  <li>React-ParticleJS for background effects</li>
  <li>React-styled-components for better design </li>
  <li>React-carousel for slides view </li>
  <li>EmailJS for contactUs page mailing</li>
  <li>Firebase for backend</li>
  
</ul>

<h2>Problems occured </h2>
<ul>
  <li>debounce function for changing state while hovering on each resume template</li>
  <li>Event Bubbling and Capturing :-> hover on img results in hovering of its parent div as well which creates problem onMouseOver event applied to change class of img tag</li>
 <li>can not push a nested objects to firestore array, use spread operator(...) in front of your object instead(firebase.firestore.FieldValue.arrayUnion(...this.props.experienceDetails)).</li>
  <li>Used history object of react render prop to navigate through different routes</li>
  </ul>
