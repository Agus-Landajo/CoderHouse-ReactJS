
const Item = ({item})=>{
    return(
        <>
            <div key={item.id} className="item">
            <div className="item_header">
              <img className="item_header_img" src={item.pictureUrl} alt="Fondo" />           
            </div>
            <p className="item_title">{item.title}</p>
            <div className="item_details">
              <button>
                <p>Mas información</p>
              </button>
              <p>${item.price}</p>
            </div>
            
          </div>
        </>
    )
}

export default Item;