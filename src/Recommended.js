

//Import Images

import c1 from "./Images/image1.jpg"
import c2 from "./Images/image2.jpg"
import c3 from "./Images/image3.jpg"
import c4 from "./Images/image4.jpg"



function Recommonded() {
    return (
      <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit </p>
        <div class="recommended__container">
  
          <div class="Course-card">
            <img src={c1} alt="Course1"/>
              <h3>Python for Data Visualization Master Class</h3>
              <p>Col Steele</p>
              <p>4.9 ⭐⭐⭐⭐</p>
              <p>499 <del>1999</del> </p>
          </div>
          <div class="Course-card">
            <img src={c2} alt="Course2"/>
              <h3>Ultimate guide for Java Mastery</h3>
              <p>Ramaswamy</p>
              <p>4.7 ⭐⭐⭐⭐</p>
              <p>599 <del>1999</del> </p>
          </div>
          <div class="Course-card">
            <img src={c3} alt="Course3"/>
              <h3>C# from Beginner to Advance</h3>
              <p>Tim corey</p>
              <p>5.0 ⭐⭐⭐⭐⭐</p>
              <p>1999 <del>2999</del> </p>
          </div>
          <div class="Course-card">
            <img src={c4} alt="Course4"/>
              <h3>Php Start to End</h3>
              <p>Jonnes Mathew</p>
              <p>3.9 ⭐⭐⭐</p>
              <p>299 <del>499</del> </p>
          </div>
  
        </div>
      </div>
    )
  }
  
export default Recommonded