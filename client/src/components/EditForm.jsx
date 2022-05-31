import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
    description: "",
  });

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

    setValues(data.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);

    setValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="mobile" className="form-label">
            Mobile
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="work" className="form-label">
            Work
          </label>
          <input
            type="text"
            className="form-control"
            id="work"
            name="work"
            value={values.work}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="form-control"
          rows="6"
          value={values.description}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
