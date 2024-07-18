import { useEffect, useState } from "react";
import "../styles/Countries.css";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import axios from "axios";

const Countries = ({ filterName, filterContinent }) => {
  const [c, setC] = useState([]);
  useEffect(() => {
    axios
      .get("/api/country")
      .then((res) => {
        setC(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="container">
        {c.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
