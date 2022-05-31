import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5">
        <div className="container">
          <div className="add_btn bt-2 mb-4">
            <button type="button" className="btn btn-primary">
              Add Data
            </button>
          </div>

          <table className="table ">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Job</th>
                <th scope="col">Contact</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Munir</td>
                <td>munir@gmail.com</td>
                <td>Develoepr</td>
                <td>32435345</td>
                <td>
                  <button type="button" className="btn btn-info">
                    <AiOutlineEye />
                  </button>
                  <button type="button" className="btn btn-success">
                    <AiFillEdit />
                  </button>
                  <button type="button" className="btn btn-danger">
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
