let btn=document.getElementById('btn')
        // llamando boton con funcion tipo flecha
        btn.addEventListener('click',()=>{
            //declando variables
            let extraer=document.getElementById('extraer').value
            let img=document.getElementById('img');
            let info=document.getElementById('informacionPokemon');
            let info0=document.getElementById('informacionPokemon0'); 
            let info1=document.getElementById('informacionPokemon1');
            let info2=document.getElementById('informacionPokemon2');          
            let xhttp=new XMLHttpRequest();
            
           //  llamando API pokemon usando ajax
            xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${extraer}`);
            xhttp.send();

            //obteniendo datos de pokeapi
            xhttp.onreadystatechange=function () {
              
                if(this.readyState==4 && this.status==200){

                    let datoPokemon=JSON.parse( this.responseText);
                      console.log(datoPokemon);
                                
                            img.setAttribute("src",datoPokemon.sprites.front_default)
                            info.textContent=datoPokemon.name
                            info0.textContent=datoPokemon.height
                            info1.textContent=datoPokemon.weight
                            info2.textContent=datoPokemon.types[0].type.name
                
                }
            }
a
        })