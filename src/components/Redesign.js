import "../App.css";
import redesign1 from "../images/redesign1.png"
import redesign2 from "../images/redesign2.png"
import redesign3 from "../images/redesign3.png"

export default function Redesign() {

  return (
    <div>
      <h2 style={{backgroundColor: 'white', alignSelf: 'flex-start'}} className="header"> Redesign </h2>
           <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}}> For this project we picked one page of a website to analyze based on usability and accessibility standards.
           Then I redesigned a low and high fidelity mock up and built the redesigned version of this webpage. I chose this
           lyric translation page because I felt that the main purpose of the site was being lost in the design of the
           site. The site is already pretty simple to use, one must simply choose a different language.  But all languages
           offered aren’t displayed in an organized manner. The text does not line correctly with the translation which can be difficult for line by line reading. All of the information is displayed on top and there aren’t cues to help with distinction and quick processing of information. </p>
          <ul class="image-gallery">
           <li>
           <img src={redesign2} alt=""/>
           <div class="overlay"><span></span> Original Site </div>
           </li>
            <li>
             <img src={redesign1} alt=""/>
             <div class="overlay"><span> Low Fidelity </span></div>
            </li>
            <li>
            <img src={redesign3} alt=""/>
            <div class="overlay"><span> High Fidelity </span></div>
            </li>
        </ul>
        <h3 style={{backgroundColor: 'white', alignSelf: 'flex-start'}}> What I've Learned</h3>
        <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}}> Through this project I've learned
         that there is never a 'finished' product and only iterations. I think that there is always imporvement
         to be made, especially when styles and designs are always being created. I was able to use html and css to code
         the final screen for this project. </p>

    </div>
  );
}