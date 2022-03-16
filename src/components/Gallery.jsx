import { Image } from "./Image";

export const Gallery = (props) => {
  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>(Click to enlarge)</p>
        </div>
        <div className="row">
          <div className="image-containerr">
            <div className="gallery-items">
              {props.data
                ? props.data.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-sm-6 col-md-4 col-lg-3"
                    >
                      <Image
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
