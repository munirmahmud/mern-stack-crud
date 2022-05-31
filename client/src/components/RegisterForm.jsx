import { useState } from "react";

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

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value);

    setValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, age, mobile, work, address, description } = values;

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          age,
          mobile,
          work,
          address,
          description,
        }),
      }
    );

    const data = await response.json();

    if (data.status === 201) {
      console.log("Saved user data");
    } else {
      console.log("Something is wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Full Name"
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
            placeholder="admin@example.com"
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
            placeholder="Age"
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
            placeholder="Mobile Number"
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
            placeholder="Work"
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
            placeholder="Address"
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
          placeholder="Description"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
