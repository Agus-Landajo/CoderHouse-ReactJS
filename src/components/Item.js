import { NavLink } from "react-router-dom";
const Item = ({ item }) => {
  return (
    <>
      <div key={item.id} className="item">
        <div className="item_header">
          <img className="item_header_img" src={item.pictureUrl} alt="Fondo" />
        </div>
        <p className="item_title">{item.title}</p>
        <div className="item_brief_description">
          <p>{item.brief_description}</p>
        </div>
        <div className="item_details">
          <NavLink className="item_details_button" to={`/item/${item.id}`}>
            <p>Mas información</p>
          </NavLink>
          <p>${item.price}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
