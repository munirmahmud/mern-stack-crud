import { useEffect, useState } from "react";
import { AiFillEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [reRender, setReRender] = useState(false);

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
  }, [reRender]);

  const handleDeleteUser = async (id) => {
    console.log(id);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/delete/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      setReRender((prevStatus) => !prevStatus);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-5">
        <div className="container">
          <div className="add_btn bt-2 mb-4">
            <Link to="/register" className="btn btn-primary">
              Add New User
            </Link>
          </div>

          {users.length > 0 ? (
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
                {users.map((user, index) => (
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
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(user?._id)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3 className="mt-5 text-center">Sorry, no user found</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
