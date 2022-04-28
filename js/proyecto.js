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

guardarLocal("listaProductos", JSON.stringify(listaProductos));


// GENERACIÓN DE CATALOGO CON DOM.
	// param aProductos array de productos
	// param divProductos es el id del html donde se va a dibujar la grilla
function render(aProductos, divProductos) {	
	const catalogo = document.getElementById(divProductos)

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
			    <p class='precios'> $ ${producto.price}</p>
			</div>
			<div class="item-button">
				<button class='btn btn-dark botonCarrito' id='idJuego-${producto.id}'>Añadir al carrito</button>   
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

// Filtrado por GENERO
// DEPORTES
function applyFilterSports(){
    document.getElementById('productos').innerHTML = ''
    const listaFiltradaSports = [];
    const listaProductos = getListaProductosPlay();
    for(let i = 0; i < listaProductos.length; i++){
        let generoPlay = listaProductos[i].genero.search('deportes')
        if(generoPlay != -1){
            listaFiltradaSports.push(listaProductos[i]);
        }
        }
        render(listaFiltradaSports, 'productos')
}

// AVENTURA
function applyFilterAdventure(){
    document.getElementById('productos').innerHTML = ''
    const listaFiltradaAdventure = [];
    const listaProductos = getListaProductosPlay();
    for(let i = 0; i < listaProductos.length; i++){
        let generoPlay = listaProductos[i].genero.search('aventura')
        if(generoPlay != -1){
            listaFiltradaAdventure.push(listaProductos[i]);
        }
        }
        render(listaFiltradaAdventure, 'productos')
}

// TERROR
function applyFilterTerror(){
    document.getElementById('productos').innerHTML = ''
    const listaFiltradaTerror = [];
    const listaProductos = getListaProductosPlay();
    for(let i = 0; i < listaProductos.length; i++){
        let generoPlay = listaProductos[i].genero.search('terror')
        if(generoPlay != -1){
            listaFiltradaTerror.push(listaProductos[i]);
        }
        }
        render(listaFiltradaTerror, 'productos')
}

// ACCION
function applyFilterAction(){
    document.getElementById('productos').innerHTML = ''
    const listaFiltradaAccion = [];
    const listaProductos = getListaProductosPlay();
    for(let i = 0; i < listaProductos.length; i++){
        let generoPlay = listaProductos[i].genero.search('accion')
        if(generoPlay != -1){
            listaFiltradaAccion.push(listaProductos[i]);
        }
        }
        render(listaFiltradaAccion, 'productos')
}


function applyRemoveFilters(){
    render(listaProductos, 'productos')
}


const filtradoGeneroTerror = listaProductos.filter(producto => producto.genero == 'terror');
const filtradoGeneroDeportes = listaProductos.filter(producto => producto.genero == 'deportes');
const filtradoGeneroAccion = listaProductos.filter(producto => producto.genero == 'accion');
const filtradoGeneroAventura = listaProductos.filter(producto => producto.genero == 'aventura');


const filtrado = document.getElementById('filterButtons').innerHTML = 
        `
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterSports()">Deportes (${filtradoGeneroDeportes.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterAdventure()">Aventura (${filtradoGeneroAventura.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterTerror()">Terror (${filtradoGeneroTerror.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyFilterAction()">Accion (${filtradoGeneroAccion.length})</button>
        </div>
        <div class="filterButton">
            <button class="btn btn-outline-success" onclick="applyRemoveFilters()">Remover filtro</button>
        </div>
        `

// ELECCIÓN DE PRODUCTO con EVENTO.
const addtoCart = document.getElementsByClassName('botonCarrito');
for (const boton of addtoCart){
    boton.addEventListener('click', addToCartClicked)
}
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer')

function addToCartClicked(event){
    const button = event.target;
    const item = button.closest('.item')
    const itemTitle = item.querySelector('.name').textContent
    const itemPrice = item.querySelector('.precios').textContent
    const itemImage = item.querySelector('.img').src

    addItemToShoppingCart(itemTitle, itemPrice, itemImage)
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
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

    updateShoppingCartTotal()
}

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')
    console.log(shoppingCartTotal)
}