import { useState } from "react";
import data from "./Data";
import "../assets/List.css";
import Buttons from "./Buttons";

function List() {
  const [people, setPeople] = useState(data);

  const handleCardDelete = (id) => {
    let newPeoples = people.filter((el) => el.id !== id);
    setPeople(newPeoples);
  };

  const handleReload = () => {
    setPeople(data)
  }

  const handleDelAll = () => {
    setPeople([])
  }

  return (
    <section className="list_container">

      {people.map((el) => {
        const { id, name, img, description } = el;
        return (
          <div className="card_container" key={id}>
            <div className="img_name_card_container">
              <img src={img} alt="" />
              <div className="name_container">
                <h3 className="card_name">{name}</h3>
                <p className="card_description">{description}</p>
              </div>
            </div>
            <button
              onClick={() => handleCardDelete(id)}
              className="card_delete"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zM13 10.586l-2.828-2.829-1.415 1.415L11.586 12l-2.829 2.828 1.415 1.415L13 13.414l2.828 2.829 1.415-1.415L14.414 12l2.829-2.828-1.415-1.415L13 10.586z"></path>
                </g>
              </svg>{" "}
            </button>
          </div>
        );
      })}
      <Buttons reload={handleReload} delet={handleDelAll}/>
    </section>
  );
}

export default List;
