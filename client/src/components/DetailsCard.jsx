const DetailsCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-4">Welcome, Munir Mahmud</h5>
        <p>
          <strong>Name:</strong> Munir
        </p>
        <p>
          <strong>Age: </strong> 44
        </p>
        <p>
          <strong>Email:</strong> munir@gmail.com
        </p>
        <p>
          <strong>Occupatoin: </strong> Developer
        </p>
        <p>
          <strong>Mobile: </strong>235434534
        </p>
        <p>
          <strong>Location: </strong> Pallabi
        </p>
        <p className="card-text">
          <strong>Description: </strong>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
