import "./styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="main-portfolio">
      <div className="container">
        <h2>Works of our creed members</h2>
        <div className="row">
          <div className="col-md-6 project">
            <img
              src="/portfolio/corona_tracker_world.png"
              alt="corona_tracker_world"
            />
            <h6>World Covid Stats</h6>
            <p>
              This Application build with React and NodeJS Upto Date Covid-19
              Data. Visualized With World and India Map. Easy UI To view
              World/India report Of Widespread disease.
            </p>
            <div className="pro_links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://web-covid19-visualization.herokuapp.com/"
              >
                view <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>{" "}
          <div className="col-md-6  project">
            <img src="/portfolio/mail_automations.png" alt="mail_automations" />
            <h6>Mail Automation</h6>
            <p>
              A full stack MERN application to schedule email for business and
              professional purposes with authentication. This app also has
              features for resheduling emails and deleting future mail events.
            </p>
            <div className="pro_links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mail-scheduler.herokuapp.com/"
              >
                view <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 project">
            <img src="/portfolio/t_news.png" alt="t_news" />
            <h6>T NEWS</h6>
            <p>
              The NEWS application built using react that shows the current
              headlines and updated NEWS all across the globe in a simple and
              accessible manner for user.
            </p>
            <div className="pro_links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tea-news.herokuapp.com/"
              >
                view <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 project">
            <img src="/portfolio/to_do.png" alt="to_do" />
            <h6>Task scheduler</h6>
            <p>
              A simple to-do web application built using Node JS to maintain and
              manage your daily tasks and helps to achieve/complete your marked
              tasks
            </p>
            <div className="pro_links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://today-to-do.herokuapp.com/"
              >
                view <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6  project">
            <img src="/portfolio/mini_blog.png" alt="mini_blog" />
            <h6>Mini Blog</h6>
            <p>
              A simple Mini Blog application built using Node JS and React with
              complect Authentication system. Easy UI interface. User can create
              account and publish their blog.
            </p>
            <div className="pro_links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://web-miniblog.herokuapp.com/"
              >
                view <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6  project">
            <img src="/portfolio/utube_notes_snap.png" alt="utube_notes_snap" />
            <h6>Youtube Notes</h6>
            <p>
              A React application with firebase support for storing notes while
              watching youtube videos and with facilties for retreiving data
              from database.
            </p>
            <div className="pro_links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://utubenotes-85f03.web.app/"
              >
                view <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6  mx-auto project">
            <img
              src="/portfolio/corona_stats_snap.png"
              alt="corona_stats_snap"
            />
            <h6>Indian Covid Stats</h6>
            <p>
              Simple web application which shows an indain map with active cases
              of covid-19 and current indian covid statistical data in readable
              form.
            </p>
            <div className="pro_links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sleepy-banach-5721b1.netlify.app/"
              >
                view <i class="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
