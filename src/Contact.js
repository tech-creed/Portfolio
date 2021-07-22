import "./styles/contact.css";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const sendMail2customer = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_abba5e3",
        "template_8kcln07",
        e.target,
        "user_rClk6O9MFVDHUip1MaMld"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const sendMail2team = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_abba5e3",
        "template_tandav5",
        e.target,
        "user_rClk6O9MFVDHUip1MaMld"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendMail = (e) => {
    sendMail2team(e);
    sendMail2customer(e);
    e.target.reset();
    history.push("/");
  };

  return (
    <div className="contact-div">
      <div className="vector-person-image">
        <img src="contact_us.svg" alt="contact_Vector_image"></img>
      </div>
      <form className="contact-form" onSubmit={sendMail}>
        <h2>MESSAGE US</h2>
        <div className="name-mail">
          <div className="name-input">
            <i className="fas fa-user"></i>
            <input autoComplete="off" type="text" name="name" required></input>
            <span>Name</span>
          </div>
          <div className="mail-input">
            <i className="fas fa-envelope"></i>
            <input type="mail" name="mail" required></input>
            <span>Mail</span>
          </div>
        </div>
        <div className="message-input">
          <i className="fas fa-comment-dots"></i>
          <textarea rows="6" name="message" required></textarea>
          <span>Your Message</span>
        </div>
        <div className="lastForm-btn-para">
          <p>
            We promise not to disclose your personal information to third
            parties.
          </p>
          <div className="sumbit-btn">
            <button type="sumbit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
