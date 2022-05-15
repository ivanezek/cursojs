const listaProductos = document.getElementById('productos')

let render = async () => {
    const resp = await fetch('/js/api.json')
    const data = await resp.json()

    html = ''
    data.forEach( producto => {
        html += `
        <div class="item">
            <div class="item-img">
                    <img class="img" src='${producto.img}' alt="${producto.name}">
                </div>
                <div class="item-name">
                    <h2 class="name">${producto.name}</h2>
                </div>
                <div class="item-price">
                    <p class='precios'>${producto.price} ARS</p>
                </div>
                <div class="item-button">
                    <button class='btn btn-dark botonCarrito' id='idJuego-${producto.id}' onclick="addToCartClicked(this)">Añadir al carrito</button>   
                </div>
        </div>`
        
    })

    listaProductos.innerHTML = html
}

render(listaProductos, 'productos')

//
// Se añade un eventlistener que reaccione ante el click en un boton.
const addtoCart = document.getElementsByClassName('botonCarrito');
for (const boton of addtoCart){
    boton.addEventListener('click', () => {
        Toastify({
            text: "Producto agregado correctamente!",
            duration: 3000,
            gravity: 'top',
            style: {
                background: "green",
              },
            position: 'left',
        }).showToast();
    }, addToCartClicked)
}

// hace un llamado al div con la clase shoppingCartItemsContainer que está en el HTML. 

const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemTitle')

// hace llamado al botón comprar
const comprarButton = document.getElementById('comprarButton')
comprarButton.addEventListener('click', () => {
    Toastify({
        text: "Redirigiendo hacia el formulario de compra...",
        duration: 3000,
        gravity: 'top',
        position: 'left',
        style: {
            background: "yellow",
          },
    }).showToast();
}, comprarButtonClicked())

//funcion que  reune nombre, precio e imagen del producto elegido
function addToCartClicked(button){
    const item = button.closest('.item')
    const itemTitle = item.querySelector('.name').textContent
    const itemPrice = item.querySelector('.precios').textContent
    const itemImage = item.querySelector('.img').src



    addItemToShoppingCart(itemTitle, itemPrice, itemImage)
}

// generación de lo reunido en addToCartClicked a través de dom
function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
    // evitar duplicado de productos en el carrito
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle')
    for(let i = 0; i < elementsTitle.length; i++){
        if (elementsTitle[i].innerText === itemTitle){
            // se utilizan 3 parent element para llegar hasta el div padre con class shoppingCartItem
            let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity')
            // por cada vez que se toque el boton comprar, el input de cantidad va a subir uno más y se actualizará el valor total del carrito
            elementQuantity.value++
            updateShoppingCartTotal()
            // el return hace que los elementos no se dupliquen
            return;
        }
    }

    // confeccion de los productos en el carrito
    const shoppingCartRow = document.createElement('div')
    const shoppingCartContent = `<div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${itemImage} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartItemsContainer.append(shoppingCartRow)

    // activador de funcion para que el boton de eliminar producto funcione
    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem)

    
    // activador de funcion para dar funcionalidad al input quantity
    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged)


    updateShoppingCartTotal()
}

// actualizacion del total del carrito
function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')

    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')

    shoppingCartItems.forEach((shoppingCartItem) =>{
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice')

        // halla el elemento $ y lo elimina y el valor del precio lo pasa a numero con la funcion Number
        const shoppingCartItemPrice = parseInt(shoppingCartItemPriceElement.textContent.replace('$', ''))

        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity')

        const shoppingCartItemQuantity = parseInt(shoppingCartItemQuantityElement.value)

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity
    })
    shoppingCartTotal.innerHTML = `$ ${total}`
}

function removeShoppingCartItem(event){
    const buttonClicked = event.target
    buttonClicked.closest('.shoppingCartItem').remove()
    updateShoppingCartTotal()
}

function quantityChanged(event){
    const input = event.target
    if (input.value <= 0){
        input.value = 1
    }
    updateShoppingCartTotal()
}

function comprarButtonClicked(){
    shoppingCartItemsContainer.innerHTML = ''
    updateShoppingCartTotal()
}



function showCart(x){
    document.getElementById("products-id").style.display = "block";
}

function closeBtn(){
    document.getElementById("products-id").style.display = "none";
}