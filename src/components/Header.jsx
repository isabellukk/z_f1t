export const Header = (props) => {
  return (
    <div id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <h2>
                  {props.data ? props.data.title2 : "Loading"}
                                  <span></span>
                                </h2>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
