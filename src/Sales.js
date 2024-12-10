import salesImage from "./Images/UdemySales.jpg"

function Sales() {
    return (
      <div className="sales">
        <img src={salesImage} alt="Sales image" />
        <div class="sale__card">
          <h2>Udemy Flash Sale! 24 hours to Save</h2>
          <p>Get top Courses for 499. Just one day to save and lifetime to learn!!</p>
        </div>
      </div>
    )
  }

  export default Sales