import "../css/style.css";
const Card = ({ sno, CommonName, scientificName, uses, Habitat, url }) => {
  return (
    <div >
      
        <div className="flip-card-container">
          <div className="flip-card">
            <div className="card-front">
              <figure>
                <div className="img-bg"></div>
                <img src={url} alt={CommonName} />
                <figcaption>{CommonName}</figcaption>
                <h4>{CommonName}</h4>
                <h4>{scientificName}</h4>
                <h4>{Habitat}</h4>
                <h4>{uses}</h4>
              </figure>
            </div>
            <div className="card-back">
              <figure>
                <div className="img-bg"></div>
                <img src={url} alt={CommonName} />
              </figure>

              <button>
                <a href="./plants/rose.html"> Know more</a>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card;