// PRODUCTOS
function getListaProductosPlay() {
    return [
        {id: 1, name: "Assassins Creed: Origins", price: 6900, genero:"aventura", img: 'assets/ac_origins.jpg'},
        {id: 2, name: "Resident Evil: Biohazard", price: 2800, genero:"terror", img: 'assets/re7.jpg'},
        {id: 3, name: "Red Dead Redemption", price: 1500, genero:"accion", img: 'assets/rdr.jpg'},
        {id: 4, name: "Batman: Arkham Knight", price: 1200, genero:"accion", img: 'assets/batman_arkham.jpg'},
        {id: 5, name: "FIFA 22", price: 7500, genero:"deportes", img: 'assets/fifa.jpg'},
        {id: 6, name: "The Last Of Us: Part 2", price: 1300, genero:"terror", img: 'assets/tlou_2.png'},
        {id: 7, name: "Cyberpunk 2077", price: 6000, genero: "aventura", img: 'assets/cyberp.jpg'},
        {id: 8, name: "GTA V", price: 2235, genero: "accion", img: 'assets/gta5.jpg'},
        {id: 9, name: "God of War", price: 1000, genero: "aventura", img: 'assets/gow.jpg'},
        {id: 10, name: "Marvel Spider-Man", price: 3896, genero: "aventura", img: 'assets/marvelSpiderman.jpg'},
        {id: 11, name: "UFC 3", price: 1180, genero: "deportes", img: 'assets/ufc3.jpg'},
        {id: 12, name: "Tennis World Tour", price: 3450, genero: "deportes", img: 'assets/tenniswt.jpg'},
        {id: 13, name: "Outlast 2", price: 2900, genero: "terror", img: 'assets/outlast2.jpg'},
        {id: 14, name: "Until Dawn", price: 1045, genero: "terror", img: 'assets/untildawn.webp'},
        {id: 15, name: "Star Wars: Jedi Fallen Order", price: 1420, genero: "aventura", img: 'assets/sw_jfo.jpg'},
        {id: 16, name: "Mafia III", price: 3100, genero: "accion", img: 'assets/mafia3.webp'},
    ]
}

const listaProductos = getListaProductosPlay()
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };


listaDom = document.getElementById('productos')

const listaProductosFetch = async () => {
    const resp = await fetch('/js/api.json')
    const data = await resp.json()
    html = ''
    data.forEach(producto => {
        html += `
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
			</div>`
    })
    listaDom.innerHTML = html
}

listaProductosFetch()





guardarLocal("listaProductos", JSON.stringify(listaProductos));


// GENERACIÓN DE CATALOGO CON DOM.
	// param aProductos array de productos
	// param divProductos es el id del html donde se va a dibujar la grilla
function render(aProductos, divProductos) {	
	const catalogo = document.getElementById(divProductos)
    catalogo.innerHTML = '';

	for(const producto of aProductos) {
		const div = document.createElement('div')
        div.className = "item"
		div.innerHTML = `
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
			</div>`
			catalogo.appendChild(div)
		}
		return
	}

render(listaProductos, 'productos')

// BUSQUEDA DE PRODUCTO con EVENTO.
function applyFilterName(){
    // recupero valor del input y lo transformo en minuscula
    const filtroName = document.getElementById('valorName').value.toLowerCase();
    // limpio el contenedor de la grilla
    document.getElementById('productos').innerHTML = '';
    // genero un array vacío para encontrar el/los elementos filtrados
    const listaFiltradaPlay = [];
    // recupero mi array original
    const listaProductos = getListaProductosPlay();
    // aplicación de for para encontrar el elemento
    for (let i = 0; i < listaProductos.length; i++) {
        // comparo con la funcion search que devuelve la posicion si encuentra el string a buscar
        let positionPlay = listaProductos[i].name.toLowerCase().search(filtroName);
        if (positionPlay != -1) {
            // inserto el producto encontrado en grilla
            listaFiltradaPlay.push(listaProductos[i]);
        }
        else if(positionPlay = -1){
            document.getElementById('productos').innerHTML = 'No se encontró el producto: ' + filtroName
        }
    }
    // vuelvo a dibujar la grilla con los elementos encontrados
    render(listaFiltradaPlay, 'productos');
}

// Filtrado por GENERO Start
function getCountByCategory(sCategory) {
    return listaProductos.filter(producto => producto.genero == sCategory);
}

const filtradoGeneroTerror = getCountByCategory('terror');
const filtradoGeneroDeportes = getCountByCategory('deportes');
const filtradoGeneroAccion = getCountByCategory('accion');
const filtradoGeneroAventura = getCountByCategory('aventura');

function applyFilterCategory(sCategory){
    document.getElementById('productos').innerHTML = ''
    const filterList = [];
    const listaProductos = getListaProductosPlay();
    for(let i = 0; i < listaProductos.length; i++){
        let generoPlay = listaProductos[i].genero.search(sCategory)
        if(generoPlay != -1){
            filterList.push(listaProductos[i]);
        }
    }
    render(filterList, 'productos')
}


function applyRemoveFilters(){
    render(listaProductos, 'productos')
}

// Filtrado por GENERO END

// botones filtro aside
const filtrado = document.getElementById('filterButtons').innerHTML = 
        `
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterCategory('deportes')">Deportes 🏀  (${filtradoGeneroDeportes.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterCategory('aventura')">Aventura (${filtradoGeneroAventura.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterCategory('terror')">Terror (${filtradoGeneroTerror.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterCategory('accion')">Accion (${filtradoGeneroAccion.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyRemoveFilters()">Remover filtro</button>
        </div>
        `


// ELECCIÓN DE PRODUCTO y AGREGADO AL CARRITO.

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