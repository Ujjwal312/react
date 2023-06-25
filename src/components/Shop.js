import Card from './Card'
function shop({shop, removeshop}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Fintness Shop</h2>
            </div>
            <div className='cards'>
                {
                    shop.map( (shop1) => {
                        return <Card key={shop1.id} {...shop1} removeshop={removeshop}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default shop ;