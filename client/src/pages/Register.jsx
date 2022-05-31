import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4">Add New User</h2>

        <RegisterForm />
      </div>
    </>
  );
};

export default Register;
