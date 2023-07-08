import vg from "../assets/programming.svg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Sloution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in childern.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            architecto a aspernatur consequatur et animi at iste soluta repellat
            modi sit voluptatibus veritatis omnis fugit, atque quo ratione, enim
            deleniti voluptatum ipsa aliquid dolor dolore id similique? Culpa
            praesentium eveniet adipisci. Similique inventore ipsam, placeat a
            neque enim sequi tenetur.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s"
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{
              animationDelay : "0.5s"
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{
              animationDelay : "0.7s"
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{
              animationDelay : "1s"
            }}>
                <AiFillInstagram/>
                <p>Instagram </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
