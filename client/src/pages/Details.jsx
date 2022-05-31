import { useEffect, useState } from "react";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import Navbar from "../components/Navbar";

const Details = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);

    setUser(data.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-between">
            <h2 className="mb-4">Details</h2>

            <div>
              <Link to={`/edit/${user?._id}`} className="btn btn-success">
                <AiFillEdit />
              </Link>
              <button className="btn btn-danger">
                <AiOutlineDelete />
              </button>
            </div>
          </div>

          <DetailsCard user={user} />
        </div>
      </div>
    </>
  );
};

export default Details;
