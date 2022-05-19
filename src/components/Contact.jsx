import {useState} from "react";
import emailjs from "emailjs-com";

const {REACT_APP_EMAIL_ID, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID} = process.env;

const initialState = {
  name: "",
  email: "",
  message: ""
};
export const Contact = (props) => {
  const [
    {
      name,
      email,
      message
    }, setState] = useState(initialState);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const clearState = () => setState({
    ...initialState
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    console.log("hi");
    emailjs.sendForm(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, e.target, `${REACT_APP_EMAIL_ID}`).then((result) => {
      console.log(result.text);
      alert("We have received your email!");
      clearState();
    }, (error) => {
      console.log(error.text);
    });
  };
  return (<div>
    <div id="contact">
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <div className="section-title">
              <div className="py-1">
                <h2>Get In Touch</h2>
              </div>
              <p>
                Let's begin your journey!
                <br/>
                Contact us!
              </p>
            </div>
            <form name="sentMessage" validate="validate" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" id="name" name="name" className="form-control" placeholder="Name" required="required" onChange={handleChange}/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" id="email" name="email" className="form-control" placeholder="Email" required="required" onChange={handleChange}/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required="required" onChange={handleChange}></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-md">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-3 col-md-offset-1">
          <h3>CONTACT INFO</h3>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-map-marker"></i>
                Address
              </span>

              <a href="https://www.google.com/maps?q=1900+N+Tustin+St.+Orange,+CA+92865&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjwp6iVpKX2AhVfJ0QIHUBIChEQ_AUoAXoECAEQAw">
                1900 N Tustin St.
                <br/>
                Orange, CA 92865
              </a>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-phone"></i>
                Phone
              </span>{" "}
              <a href="tel:17143191836">714.319.1836</a>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-envelope-o"></i>
                Email
              </span>{" "}
              <a href="mailto:Gabrielzapata23@yahoo.com">
                Gabrielzapata23@yahoo.com
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li>
                  <a href={props.data
                      ? props.data.facebook
                      : "/"}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data
                      ? props.data.instagram
                      : "/"}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);
};
