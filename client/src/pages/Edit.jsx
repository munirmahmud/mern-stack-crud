import EditForm from "../components/EditForm";
import Navbar from "../components/Navbar";

const Edit = () => {
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
