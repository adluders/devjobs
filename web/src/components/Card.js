import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Card = ({ job }) => {
  const { darkMode } = useContext(ThemeContext);

  const {
    company,
    contract,
    location,
    position,
    postedDate,
    logo,
    logoBackground,
  } = job;

  return (
    <Link to={`/${company}`}>
      <div className={`card ${darkMode ? "dark" : ""}`}>
        <div
          className="card__header"
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <img src={logo.asset.url} alt={company} />
        </div>
        <div className="card__body">
          <p>
            {postedDate}. {contract}
          </p>
          <h2>{position}</h2>
          <p>{company}</p>
        </div>
        <div className="card__footer">
          <p>{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
