import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import Navbar from "../components/Navbar";

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-between">
            <h2 className="mb-4">Details</h2>

            <div>
              <Link to="/edit/3" className="btn btn-success">
                <AiFillEdit />
              </Link>
              <button className="btn btn-danger">
                <AiOutlineDelete />
              </button>
            </div>
          </div>

          <DetailsCard />
        </div>
      </div>
    </>
  );
};

export default Details;
