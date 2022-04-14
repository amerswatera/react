import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CardComponent from "../components/CardComponent/CardComponent";

const CardsPanelPage = () => {
  const location = useLocation();
  const userInfoRedux = useSelector((state) => state.auth.userData);
  const [cardsArr, setCardsArr] = useState([]);
  console.log("location.pathname", location.pathname);
  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setCardsArr(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {cardsArr.map((item) => {
        return (
          <CardComponent
            id={item._id}
            key={item._id}
            name={item.name}
            description={item.description}
            phone={item.phone}
            address={item.address}
            image={item.image}
            userIDCard={item.userID}
            userIDLoggedIn={userInfoRedux._id}
          />
        );
      })}
    </div>
  );
};

export default CardsPanelPage;
