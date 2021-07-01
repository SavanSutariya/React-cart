function product() {
    return (
        <>
            <div>
                <img src="/img/peprony.jpg" alt="pizza"></img>
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">Hawana Special</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">small</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>$ 50.0</span>
                    <button className="py-1 px-4 rounded-full font-bold bg-yellow-500">ADD</button>
                </div>
            </div>   
        </>
    );
}
export default product
