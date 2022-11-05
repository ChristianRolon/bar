const SHEET_ID = "1roOcmnx54VENxTZV98eNqEiiw0EcpBOXWQfqYNoGtwc";

const ACCESS_TOKEN =
  "ya29.a0Aa4xrXPeZeCgjADJUr1yyG49hcXbMVUVCHX_aIEbR9TM0H-SKgZhQDXQ2ELOwyynU_1J8eU9CrFtYfz9m96FXytJY87_UA0tDb017N41lxS05szsRK1Z-la7VfURjyeUIHmKxg1Tbaa_tdDTO4EifUlOfivDaCgYKAeoSARMSFQEjDvL9hRhhjpc0qzHU9Rk3d75hGw0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/bebidas!A1:C1000`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
)
.then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];

        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});