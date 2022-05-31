const DetailsCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-4">Welcome, {user?.name}</h5>
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Age: </strong> {user?.age}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Occupatoin: </strong> {user?.work}
        </p>
        <p>
          <strong>Mobile: </strong>
          {user?.mobile}
        </p>
        <p>
          <strong>Location: </strong> {user?.address}
        </p>
        <p className="card-text">
          <strong>Description: </strong>
          {user?.description}
        </p>
      </div>
    </div>
  );
};

export default DetailsCard;
