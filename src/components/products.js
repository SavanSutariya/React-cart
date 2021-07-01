import Product from './product';
function products() {
    
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Poduct</h1>
            <div className="grid grid-cols-5 my-8 gap-24">    
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default products
