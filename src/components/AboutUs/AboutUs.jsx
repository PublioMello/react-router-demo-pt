import { Link,Outlet } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
    <ul>
      <li>
        <Link to="site-history">Nossa Historia</Link>
      </li>
      <li>
        <Link to="site-mission">Nossa Missao</Link>
      </li>
      </ul>
      <p>Encontre mais informações sobre nosso site aqui.</p>
      <Outlet/>
    </div>
  );
}

export default AboutUs;