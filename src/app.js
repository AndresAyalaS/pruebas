var contenido = document.querySelector('#contenido')/*esta variable hace referencia al id creado en el div contenido*/


    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => {
        //console.log(data.results);
        pintartabla(data.results);      
    });
function pintartabla(datos){
    //console.log("Esto es lo que imprime: "+datos);
    contenido.innerHTML='';
   
   for(let valor of datos ){
      // console.log(valor.image);          
    contenido.innerHTML += `  
        <div class="col-lg-4">   
        <div class="card mb-3">
                        
        <div class="img-fluid img-thumbnail" style="background-color:black" >
            <div class="card-image">
            <a  href="javascript:individual(${valor.id});">   <img src="${valor.image}"  class="card-img" alt="..."> </a>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                  <h5 style="color:#E2DDDC" class="card-title">${valor.name}</h5>
                  
                </div>
            </div>
        </div>
        </div>
        </div>           
    `;
   }
}

// usar datos individual
function individual(parametro){

   fetch('https://rickandmortyapi.com/api/character/'+parametro)
   .then(res => res.json())
   .then(data => {
       console.log(data);
       pintarindividual(data);      
   });

 
}

//mostrar informacion de cada personaje
function pintarindividual(datos){
    contenido.innerHTML='';
 contenido.innerHTML += ` 

 <div class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <img src="${datos.image}"  class="card-img" alt="..."> 
        </div>
        <div class="col-md-6">
            <h5 style="color:#E2DDDC" class="card-title">Nombre   ${datos.name}</h5>
            <p style="color:#E2DDDC" class="card-text"> id  ${datos.id} </p>
            <p style="color:#E2DDDC" class="card-text"> Genero  ${datos.gender} </p>
            <p style="color:#E2DDDC" class="card-text"> Especie  ${datos.species} </p>
            <p style="color:#E2DDDC" class="card-text"> Estado  ${datos.status} </p>
            <p style="color:#E2DDDC" class="card-text"> Locación  ${datos.location.name} </p>
            <p style="color:#E2DDDC" class="card-text"> Origen  ${datos.origin.name} </p>
        </div>
    </div>
</div>
 
 `;
 
}



