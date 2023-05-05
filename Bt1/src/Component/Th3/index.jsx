import { useState } from "react";
import { useForm } from 'react-hook-form';
import "./App.css";

export default function App() {
  const [values, setValues] = useState({
    email: '', password: '', confirmPassword: '', isRead: false,
  });
  const [errors, setErrors] = useState([]);

  /// add function when value change
  const handleChange = (event) => {
    event.persist();

    if (event.target.name === 'isRead') {
      setValues({
        ...values,
        [event.target.name]: !values.isRead,
      });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }

  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const stringJson = JSON.stringify(values);
  return (
    <div className="container">
      <h1>Đăng ký</h1>
      {errors.map((error) => (
        <p key={error}>Error: {error}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <p>nhập email:</p>
        <input
          name="email"
          type="text"
          defaultValue={values.email}
          onChange={handleChange}
        />
        <p>nhập password:</p>
        <input
          name="password"
          type="password"
          defaultValue={values.password}
          onChange={handleChange}
        />
        <p>nhập lại password:</p>
        <input
          name="confirmPassword"
          type="password"
          defaultValue={values.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>
          <input
            name="isRead"
            type="checkbox"
            checked={values.isRead}
            onChange={handleChange} />I read and accept the privacy policy:
        </label>

        <p>bấm submit form</p>
        <button>submit nè</button>
      </form>
      <div className="show-json-string-setValues">{stringJson}</div>
    </div>
  );
}