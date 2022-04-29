$('#submitButton').on("click" , function (event) {
    event.preventDefault();
    CaptureDatafromSubmit();
    return false;
   });

function CaptureDatafromSubmit(){
    const form = document.getElementById('formulario');
    let ciudad = form.elements["ciudad"]["value"]
    let tipo = form.elements["tipo"]["value"]
    MyFiltrer(ciudad , tipo)
}

function MyFiltrer(Ciudad , Tipo){
    const xhttp = new XMLHttpRequest() ; 

    xhttp.open("GET" , "data-1.json" , true)
    xhttp.send()

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            
            //Aqui ya tenemos el obj a trabajar 
            let datos = JSON.parse(this.responseText) ; 
            var datos_nuevos = []
            let res = document.querySelector("#ResBienesDisponibles")
            res.innerHTML = "" ; 

            //Hacemos la fase de seleccion: Fase sin seleccion
            if(Ciudad == "Elige una ciudad" && Tipo == "Elige un tipo"){
                var datos_nuevos = datos
            }

            //Si se pide una seleccion de tipo y ciudad 
            if(Ciudad != "Elige una ciudad" && Tipo != "Elige un tipo"){
                var datos_nuevos = []
                //Seleccion de datos 
                for(let item of datos){
                    if(item.Ciudad == Ciudad && item.Tipo == Tipo){
                        datos_nuevos.push(item)
                    }    
                }    
            }
            
            //Si alguna de las dos opciones esta sin seleccionar 
            if(Ciudad == "Elige una ciudad" ^ Tipo == "Elige un tipo"){
                var datos_nuevos = []
                //Seleccion de datos 
                if(Ciudad == "Elige una ciudad"){
                    for(let item of datos){
                        if(item.Tipo == Tipo){
                            datos_nuevos.push(item)
                        }    
                    }  
                }else {
                    for(let item of datos){
                        if(item.Ciudad == Ciudad){
                            datos_nuevos.push(item)
                        }    
                    }  
                }
                 
            }

            for(let item of datos_nuevos){
                res.innerHTML += `
                <div class="row">
                    <img class="col s5" src="img/home.jpg" alt="Default Image">
                    <form class="col s7" action="" id="form_insert">
                        <div class="row">
                        <p class="col s6">Direccion</p><input class="col s6" type="text" name="Direccion" value="${item.Direccion}" readonly="readonly" >
                        <p class="col s6">Ciudad</p><input class="col s6" type="text" name="Ciudad" value="${item.Ciudad}" readonly="readonly" >
                        <p class="col s6">Telefono</p><input class="col s6" type="text" name="Telefono" value="${item.Telefono}" readonly="readonly">
                        <p class="col s6">Codigo_Postal</p><input class="col s6" type="text" name="Codigo_Postal" value="${item.Codigo_Postal}" readonly="readonly">
                        <p class="col s6">Tipo</p><input class="col s6" type="text" name="Tipo" value="${item.Tipo}" readonly="readonly">
                        <p class="col s6">Precio</p><input class="col s6" type="text" name="Precio" value="${item.Precio}" readonly="readonly">
                        </div>
        
                        <input class="waves-effect waves-light btn" type="submit" value="Guardar" />
                    </form>
                </div>
                `
            }
        }
    }
}

    
MyFiltrer("Elige una ciudad" , "Elige un tipo")