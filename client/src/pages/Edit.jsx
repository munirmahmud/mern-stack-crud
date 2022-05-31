import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import Navbar from "../components/Navbar";

const Edit = () => {
  const id = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">Edit User</h2>
        <EditForm />
      </div>
    </>
  );
};

export default Edit;
