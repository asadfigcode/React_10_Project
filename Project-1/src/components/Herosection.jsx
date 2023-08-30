
const Herosection = () => {
    return(

       <div className="hero container">
          <div className="hero_content">
            <h1>YOUR FEET <br/> DESERVE <br/> THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="couple_btn">
                <button type="button">Shop Now</button>
                <button type="button" className="secondary_btn">category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
            </div>
            <div className="brand_icon">
              <a href="#"><img src="images/flipkart.png" alt="kartimg" /></a>
              <a href="#"><img src="images/amazon.png" alt="amazonimg" /></a>
            </div>
          </div>
          {/* left section end  */}

          <div className="hero_image">
            <img src="images/shoe_image.png" alt="shoeimage" />
          </div>
          {/* right section end  */}
        

       </div>
    )
}

export default Herosection