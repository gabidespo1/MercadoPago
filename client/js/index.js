const productos = [
    {
        id: 1, 
        productName: "Perro-1", 
        price: 10, 
        quanty: 1, 
        img: "./media/foto 1.webp",
    },
    {
        id: 2, 
        productName: "Perro-2", 
        price: 12, 
        quanty: 1, 
        img: "./media/foto 2.webp",
    },
    {
        id: 3, 
        productName: "Perro-3", 
        price: 11, 
        quanty: 1, 
        img: "./media/foto 3.webp",
    },
];

let cart = [];

const shopContent = document.getElementById("shopContent");

productos.forEach((product) => {
    const content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}" alt="${product.productName}">
        <h3>${product.productName}</h3>
        <p class="price">${product.price} $</p>
    `;
    shopContent.append(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy";
    content.append(buyButton);

    buyButton.addEventListener("click", () => {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat) {
            cart.map((prod) => {
                if (prod.id === product.id) {
                    prod.quanty++;
                }
            });
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: 1,
                img: product.img,
            });
        }
        displayCartCounter();
    });
});

const displayCartCounter = () => {
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
    document.getElementById("cart-counter").innerText = cartLength;
};
 





   
//const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
    
//este if es para que no se repita la cantidad de un producto en el model
//if(repeat){
//    cart.map((prod) =>{
//        if(prod.id === product.id) {
//            prod.quanty++
//        }
//    })
//}else{
//    cart.push({
//        id: product.id , 
//        productName: product.productName ,
//        price: product.price ,
//        quanty: product.quanty ,
//        img: product.img,
//    })
//}
//})