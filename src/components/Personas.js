import "./components.css";
import personas from "../images/personas2.png"

export default function Personas() {

  return (
    <div>
       <h2 style={{backgroundColor: 'white', alignSelf: 'flex-start'}} className="header"> Personas </h2>
       <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}} className="App"> This project had us analyzing the ways users think about and interact with a certain interface.
        Beginning with our own inspections, and then through observations and questioning, we were able to think through
         certain design choices and how they cna be imporved upon. For this project I chose a MEGABOOM speaker, which as confused
         me and some of my unfamiliar friends before. I used the personas and storyboarding template to outline a user's experience
         with the speaker and break apart it's components </p>

        <img className="img" src={personas}></img>
        <h3 style={{backgroundColor: 'white', alignSelf: 'flex-start'}}> What I've Learned</h3>
                 <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}}> My biggest takeaway from this
                 from this porject was the importance of intentionality when creating especially when others will be interacting with your finishing
                 product. Each decision should be deliberate and without assumptions. Story-building puts a creater in the shoes of their user
                 which a invaluable insight.
                 </p>
    </div>
  );
}