import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignupPage = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [biz, setBiz] = useState(false);

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleBizChange = (ev) => {
    // console.log(ev.target.checked);
    setBiz(ev.target.checked);
  };

  const handleSignup = (ev) => {
    ev.preventDefault();
    //add joi validation
    axios
      .post("/users/register", { name, email, password, biz })
      .then((res) => {
        console.log("res.data", res.data);
        history.push("/login", { email, password });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleEmailChange}
          value={email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handlePasswordChange}
          value={password}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={handleBizChange}
          checked={biz}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignupPage;
