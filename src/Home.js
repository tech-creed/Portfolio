import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homecaro">
      <AliceCarousel
        autoPlay
        animationDuration="2000"
        animationType="slide"
        autoPlayInterval="5000"
        infinite={true}
        controlsStrategy="alternate"
        disableButtonsControls={true}
        mouseTracking={true}
      >
        <div className="caro caro-item1">
          <div className="caro-content caro-content1">
            <h2>Development</h2>
            <p>
              Everyone and everything needs development , we develope websites
              and softwares for the development of you and us .
            </p>
            <p style={{ color: "#ff7043", fontFamily: "Cambria" }}>
              &lt; We build WebApplications /&gt;
            </p>
          </div>
          <div className="caro1-img">
            <img src="team.svg" alt="team" />
          </div>
          <p className="slide-move">slide to next &rarr;</p>
        </div>

        <div className="caro caro-item2">
          <div className="bg style-bg-img2">
            <img src="bg_images/ellipse_green.png" alt="ellipse_green" />
          </div>
          <div className="caro2-img">
            <img src="developer.gif" alt="developers" />
          </div>
          <div className="caro-content caro-content2">
            <h2>Who We Are ?</h2>
            <p>
              We are student developers, freelancers and open source
              contributers. We are small community with great goal to achieve
              big in current tech industry.
            </p>
            <Link to="/about">Know More</Link>
          </div>
          <p className="slide-move">slide to next &rarr;</p>
        </div>

        <div className="caro caro-item3">
          <div className="bg style-bg-img3">
            <img src="bg_images/ellipse_purple.png" alt="ellipse_purple" />
          </div>
          <div className="caro-content caro-content3">
            <h2>Us In Tomorrow</h2>
            <p>
              In future We build solution for complex software riddles using
              advanced technologies like Artificial Intelliengnce, Machine
              Learning and Deep Learning. We make products of much easier to
              modern lifestyles.
            </p>
            <Link to="/portfolio">Know More</Link>
          </div>
          <div className="caro3-img">
            <img src="laptop_fly.gif" alt="laptop_fly" />
          </div>
          <p className="slide-move">slide to next &rarr;</p>
        </div>

        <div className="caro caro-item4">
          <div className="bg style-bg-img4">
            <img src="bg_images/ellipse_yellow.png" alt="ellipse_yellow" />
          </div>
          <div className="caro-content caro-content4">
            <h2>
              “Everybody is a genius. But if you judge a fish by its ability to
              climb a tree, it will live its whole life believing that it is
              stupid.”
            </h2>
            <p>- Albert Einstein</p>
            <div className="conlinks">
              <Link to="/contact">Talk To Us</Link>
              <Link to="/contact">Join Us</Link>
            </div>
          </div>
          <p className="slide-move">slide to next &rarr;</p>
        </div>
      </AliceCarousel>
    </div>
  );
};

export default Home;
