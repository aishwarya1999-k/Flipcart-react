async function product(){

    let data=fetch('https://fakestoreapi.com/products')
    let apidata=await (await data).json()
    return apidata
    }
    export {product}