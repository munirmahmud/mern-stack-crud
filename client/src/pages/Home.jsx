import React, { useEffect } from "react";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/all`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
              {users.length > 0 &&
                users.map((user, index) => (
                  <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.work}</td>
                    <td>{user.mobile}</td>
                    <td>
                      <Link
                        to={`/details/${user._id}`}
                        className="btn btn-info"
                      >
                        <AiOutlineEye />
                      </Link>
                      <Link
                        to={`/edit/${user?._id}`}
                        className="btn btn-success"
                      >
                        <AiFillEdit />
                      </Link>
                      <button type="button" className="btn btn-danger">
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
