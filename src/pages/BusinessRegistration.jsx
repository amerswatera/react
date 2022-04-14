import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const BusinessRegistration = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handleDescriptionChange = (ev) => {
    setDescription(ev.target.value);
  };
  const handleAddressChange = (ev) => {
    setAddress(ev.target.value);
  };
  const handlePhoneChange = (ev) => {
    // console.log(ev.target.checked);
    setPhone(ev.target.checked);
  };
  const handleImageChange = (ev) => {
    // console.log(ev.target.checked);
    setImage(ev.target.checked);
  };

  const handleNewCard = (ev) => {
    ev.preventDefault();
    //add joi validation
    axios
      .post("/cards/biz-log", { name, description, address, phone, image })
      .then((res) => {
        console.log("res.data", res.data);
        history.push("/cardspanel", {
          name,
          description,
          address,
          phone,
          image,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <form onSubmit={handleNewCard}>
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
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleDescriptionChange}
          value={description}
        />
      </div>
      <br />
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputAddress"
          onChange={handleAddressChange}
          value={address}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone" className="form-label">
          Phone
        </label>
        <input
          type="phone"
          className="form-control"
          id="exampleInputPhone"
          onChange={handlePhoneChange}
          value={phone}
        />
      </div>
      <div>
        <label htmlFor="exampleInputImage" className="form-label"></label>
        <input
          type="link"
          className="form-control"
          id="exampleInputImage"
          onChange={handleImageChange}
          value={image}
        />
      </div>

      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BusinessRegistration;
