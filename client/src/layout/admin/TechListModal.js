import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch("/Employees");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="employee-list-modal" className="modal">
      <div className="modal-content">
        <h4>Employees</h4>
        <ul className="collection">
          {!loading &&
            techs.map(tech => (
              <li key={tech.id} className="collection-item">
                {tech.firstName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
