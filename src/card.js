import mapslogo from "./maps-logo.png";

function Card(prop) {
  return (
    <div className="card-container">
      <img
        src={prop.imageUrl}
        alt="image.png"
        className="container-image"
      ></img>
      <div className="details">
        <div className="location">
          <img src={mapslogo}></img>
          <span> J A P A N &nbsp; &nbsp;</span>
          <span>
            <a href={prop.googleMapsUrl} className="maps-link">
              View on Google Maps
            </a>
          </span>
        </div>
        <h1>{prop.title}</h1>
        <br></br>
        <h4>
          {prop.startDate} - {prop.endDate}
        </h4>
        <p className="description">{prop.description}</p>
      </div>
    </div>
  );
}

export default Card;
