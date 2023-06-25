

function Card({id, image,info,price,name, removeshop})  {

    

  
    const description = info;

    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="shop-info">
                <div className="shop-details">
                    <h4 className="shop-price">₹ {price}</h4>
                    <h4 className="shop-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                
                 
                </div>
            </div>

            <button className="btn-red" onClick={() => removeshop(id)}>
                Add to card
            </button>
        </div>
        
    );
}

export default Card;