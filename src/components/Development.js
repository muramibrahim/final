import "../App.css";
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"

export default function Development() {

  return (
  <div>
        <h2 style={{backgroundColor: 'white', alignSelf: 'flex-start'}} className="header"> Iterative Design </h2>
          <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin: '10px 50px'}}> Our interface aims to make the online grocery shopping experience intuitive and easy for users.
              Since Radius delivers from multiple grocery stores, our design aims to accurately present the options
              that are available from each store, while also allowing users to easily access items from other stores.
              Additionally, we understand that the heart of Radius is fast delivery. Driven by the philosophy that knowledge
              instills confidence, we were careful to design an interface that communicates order statuses as clearly as possible.</p>
                <ul class="image-gallery">
                         <li>
                         <img src={img2} alt=""/>
                         <div class="overlay"><span></span>  </div>
                         </li>
                          <li>
                           <img src={img3} alt=""/>
                           <div class="overlay"><span> </span></div>
                          </li>
                      </ul>
            <h3 style={{backgroundColor: 'white', alignSelf: 'flex-start'}}> What I've Learned</h3>
             <p style={{backgroundColor: 'aliceblue', alignSelf: 'flex-start', margin:'10px 50px'}}> This was the first time working
              in a group project making design choices. I learned that mapping out a plan within a group has its strengths and weaknesses.
              With this project we found that spending a lot of time outlining goals and a foundation for our product was the most
              valuable part. We created this hi-fi mockups and conducted a feedback session with other students in our class. We then incoporated
              this feedback and we were able to deliver this interface to Radius confident and proud in our design choices.</p>

        </div>
  );
}