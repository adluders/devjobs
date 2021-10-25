import { useContext } from "react";
import { useParams } from "react-router";
import { JobContext } from "../context/JobContext";
import { ThemeContext } from "../context/ThemeContext";

const Detail = () => {
  const { darkMode } = useContext(ThemeContext);

  let { slug } = useParams();
  const { data } = useContext(JobContext);

  const pageData = data.allJob.filter((job) => job.company === slug);

  const {
    company,
    contract,
    apply,
    description,
    location,
    logo,
    logoBackground,
    position,
    postedDate,
    requirement,
    role,
    website,
  } = pageData[0];

  return (
    <div className={`detail ${darkMode ? "dark" : ""}`}>
      <section className="detail-header">
        <div
          className="detail-header__logo"
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <img src={logo.asset.url} alt={company} />
        </div>

        <div className="detail-header__info">
          <div className="detail-header__info-company">
            <h2>{company}</h2>
            <p>{website}</p>
          </div>

          <div className="detail-header__info-cta">
            <a
              className="button"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              company site
            </a>
          </div>
        </div>
      </section>

      <main className="detail-content">
        <section className="detail-content__header">
          <div className="detail-content__header-company">
            <p>
              {postedDate} . {contract}
            </p>
            <h1>{position}</h1>
            <p>{location}</p>
          </div>

          <div className="detail-content__header-cta">
            <a
              href={apply}
              className="button primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              apply now
            </a>
          </div>
        </section>

        <section className="detail-content__description">
          <p> {description} </p>
        </section>

        <section className="detail-content__requirements">
          <h3>requirements</h3>
          <p> {requirement.content} </p>
          <ul>
            {requirement.items.map((item, inx) => (
              <li key={inx}> {item} </li>
            ))}
          </ul>
        </section>

        <section className="detail-content__role">
          <h3>what you will do</h3>
          <p> {role.content} </p>
          <ol>
            {role.items.map((role, inx) => (
              <li key={inx}> {role} </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Detail;
