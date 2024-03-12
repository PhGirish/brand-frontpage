import "../assets/hero.css";

export default function Hero() {
  return (
    <>
      <main className="hero">
        <div className="hero-main">
          <h1>RUN THE DAY DONT LET IT RUN YOU</h1>
          <p className="hero-para">
            YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
            SHOES . RUN THE DAY, DON'T LET IT RUN YOU.
          </p>
          <button className="buy-button shop">Shop Now</button>
          <button className="buy-button category">Category</button>
          <p className="footer">also available on</p>
          <img className="hero-logo" src="amazonlogo.png" alt="" />
          <img className="hero-logo" src="flipkartlogo.png" alt="" />
        </div>
        <div className="img">
          <img className=" nike" src="nike1.png" alt="" />
        </div>
      </main>
    </>
  );
}
