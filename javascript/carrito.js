const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: "$100.00"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: "$100.00"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: "$100.00"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: "$150.00"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: "$150.00"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: "$150.00"
    },
    {
        id: 7,
        nombre: "Producto 7",
        precio: "$200.00"
    },
    {
        id: 8,
        nombre: "Producto 8",
        precio: "$200.00"
    },
    {
        id: 9,
        nombre: "Producto 9",
        precio: "$260.00"
    }

]
const acciones = ["comprar","borrar"]

function showName(){
    const nombres = document.querySelectorAll('.producto-titulo')
    for (let i = 0; i < nombres.length; i++) {
        nombres[i].innerHTML = productos[i].nombre
    }
}

function showPrice(){
    const precio = document.querySelectorAll('.producto-precio')
    for (let i = 0; i < precio.length; i++) {
        precio[i].innerHTML = productos[i].precio   
    }
}

function showView(){
    showName()
    showPrice()
    // showDescription()
}

showView()

let cantidad = 1;
const kart = document.querySelector('.kart-body')
function addKart(index){
    kart.innerHTML += `
    <div class="row cuerpo-carro">
        <div class="col-12">
            <div class="item-carrito">
                <h2>${productos[index].nombre}</h2>
                <div class="contador-cantidad">
                    <div class="suma operacion" onclick="operacion("suma")">
                        +
                    </div>
                    <div>${cantidad}</div>
                    <div class="resta operacion" onclick="operacion("resta")">
                        -
                    </div>
                </div>
                <p>${productos[index].precio}</p>
            </div>
        </div>
    </div>
    
    `
}

const btn = document.querySelectorAll('.btn-comprar')
for (let i = 0; i < btn.length; i++) {
     btn[i].addEventListener('click',()=>{
         addKart(i)
     })   
}

function borrarContenido(){
    document.querySelector('.cuerpo-carro').innerHTML = ''
}

function doAction(action){
    if (action == "comprar") {
        if (kart.nodeValue !== '') {
            alert('Objeto comprado')
        }else{
            alert("No has añadido nada al carrito")
        }
    }else{
        borrarContenido()
    }
}
