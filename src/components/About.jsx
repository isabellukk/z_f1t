export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About</h2>
              <div className="about-text-container">
                <h3>Our Story</h3>
                <p>{
                    props.data
                      ? props.data.paragraph1
                      : "loading..."
                  }</p>
                <p>{
                    props.data
                      ? props.data.paragraph2
                      : "loading..."
                  }</p>
              </div>
            </div>
          </div>
          <div className="col-xs-14 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="about-img"/>
          </div>
        </div>
      </div>
    </div>);
};
