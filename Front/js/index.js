const botonEditar = document.querySelector("#btnEditar");
botonEditar.addEventListener("click", ()=>{
  window.location.href = "./pages/edit.html" //`edit.html?id=${posteo.id}`
  })

const botonEliminar = document.querySelector("#btnEliminar")
botonEliminar.addEventListener("click",()=>{
    //borrarPosteo(posteo.id)
    alert('¡La película se eliminó de forma exitosa!');
}) 