
const Item = ({item})=>{
    return(
        <>
            <div key={item.id} className="item">
            <div className="item_img">
              <p>{item.title}</p>
              <br />
              <p>{item.pictureUrl}</p>
            </div>
            <div className="item_details">
              <button>
                <p>Ver detalles</p>
              </button>
            </div>
            <p>${item.price}</p>
          </div>
        </>
    )
}

export default Item;