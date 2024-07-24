import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://bogward.onrender.com/products");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="home-main">
        {data.map((elem) => (
          <div
            key={elem._id}
            style={{ border: "1px solid" }}
            onClick={() => navigate(`/single-product/${elem._id}`)} 
          >
            <Card image={elem.image} name={elem.name} price={elem.cost} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
