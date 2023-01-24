import "../App.css";
import abtesting from "../images/abtesting.png"
import batesting from "../images/batesting.png"

export default function AB() {

  return (

  <div>
        <h2 style={{backgroundColor: 'white', alignSelf: 'flex-start'}}> A/B Testing </h2>
        <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}}> A/B testing is a common technique used to evaluate an interface’s performance by randomly
        presenting users version A and version B. Between these versions, data is collected and analyzed to
        test hypotheses, evaluate performance, and inform design changes or improvements to the experience.
   </p>
   <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}}> Here we created two bakery pages and used eye tracking technology to analyze which of the two sites allowed
   users to check out more seamlessly and quicker. Site A dedicated more space to names, while site B relied mostly on visuals.
   The results of our analysis proved that site B on the right hand side was
   obkectively a more user-friendly site. </p>


       <ul class="image-gallery">
              <li>
                  <img src={abtesting} alt=""/>
                  <div class="overlay"><span>site a</span></div>
                </li>
                <li>
                  <img src={batesting} alt=""/>
                  <div class="overlay"><span>site b</span></div>
                </li>

              </ul>
       <h3 style={{backgroundColor: 'white', alignSelf: 'flex-start'}}> What I've Learned</h3>
                <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}}> Throough this project I familiarizd myself with a full iterative design process flow
                                    and took on a professional approach towards app design. I built upon on my wireframing and prototyping skills and
                                    practiced collaborative work in a design environment. I also became well acquainted with receiving and incorporating feedback from critiques and user testing trials
                </p>
    </div>
  );
}