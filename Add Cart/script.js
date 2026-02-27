let products=[
    {name:"blue Chair", headline:"lakdi ka stool",price:"1500 Rs",image:"https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"White Chair", headline:"Soft like cloud",price:"2500 Rs",image:"https://images.unsplash.com/photo-1506326426992-32b61983f2fd?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Tradiational Chair", headline:"Looks very old",price:"1000 Rs",image:"https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    
];
let popular=[];

function Addproducts(){
let clutter="";
products.forEach(function(product,index){
    clutter +=` <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${product.image}" />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index="${index}" class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
})
document.querySelector(".products").innerHTML=clutter;
}

let cart=[];

function AddToCart(){
    document.querySelector(".products")
    .addEventListener("click",function(details){
       if(details.target.classList.contains('add')){
        cart.push(products[details.target.dataset.index])
        console.log(cart)
       };
    })
}
AddToCart();
Addproducts();