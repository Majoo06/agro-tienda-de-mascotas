
//--------------------------------------------------//
let productos=[]
const principal = document.getElementById('contprincipal')

document.addEventListener('DOMContentLoaded',()=> {
  productosDB()
})



const productosDB = async()=>{
 try {
  const result = await  axios.get('http://localhost:3006/')
  productos = result.data
  tarjetas(productos)
 } catch (error) {
  
 }
}

const tarjetas =(productos)=>{
  console.log(productos)
  principal.innerHTML =''
  productos.forEach(element => {
    const {ID, Cantidad, Precio, imagen,Nombre,Marca,Categoria} =element
    const contenedor =document.createElement('div')

    contenedor.innerHTML = `<div class="cards">

    <div class="card">
    <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover"
      style="width: 360px; overflow: hidden; border-radius: 1px;">
      <img src= ${imagen}
        alt="Man with backpack" class="d-block w-full">

      <div class="px-2 py-2">
        <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
          ${Marca}
        </p>

        <h2 class="" style="line-height: 1.25;">
          ${Nombre}
        </h2>

        <p class="mb-1">
          $ ${Precio} 
        </p>
      </div>
    </div>
  </div>
</div>`


  principal.appendChild(contenedor)
  });
}