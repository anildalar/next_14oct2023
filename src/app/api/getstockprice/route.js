//1. Import

//2. Definea area
async function GET(){
    //await

    //Every function return something
    const min = 124;
    const max = 126;
    var stockPrice = (Math.random() * (max - min) + min).toFixed(2);
    stockPrice = parseFloat(stockPrice);
    return Response.json({
      //property:value
        price:stockPrice
    });
}


//3. Export Area

module.exports =  { GET:GET } 