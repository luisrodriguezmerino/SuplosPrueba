function BienesGuardados(){
    const xhttp = new XMLHttpRequest() ; 

    xhttp.open("GET" , "php/bienesGuardados.php" , true)
    xhttp.send()

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            
            //Aqui ya tenemos el obj a trabajar 
            let datos = JSON.parse(this.responseText) ; 
            //Hacemos la fase de seleccion: Fase sin seleccion
            let res = document.querySelector("#ResBienesGuardados")
            res.innerHTML = "" ; 

            for(let item of datos){
                res.innerHTML += `
                <div class="row">
                    <img class="col s5" src="img/home.jpg" alt="Default Image">
                    <form class="col s7" action="" id="form_delete">
                        <div class="row">
                        <input type="hidden" name="Id" value="${item[0]}">
                        <p class="col s6">Direccion</p><input class="col s6" type="text" name="Direccion" value="${item[1]}" readonly="readonly" >
                        <p class="col s6">Ciudad</p><input class="col s6" type="text" name="Ciudad" value="${item[2]}" readonly="readonly" >
                        <p class="col s6">Telefono</p><input class="col s6" type="text" name="Telefono" value="${item[3]}" readonly="readonly">
                        <p class="col s6">Codigo_Postal</p><input class="col s6" type="text" name="Codigo_Postal" value="${item[4]}" readonly="readonly">
                        <p class="col s6">Tipo</p><input class="col s6" type="text" name="Tipo" value="${item[5]}" readonly="readonly">
                        <p class="col s6">Precio</p><input class="col s6" type="text" name="Precio" value="${item[6]}" readonly="readonly">
                        </div>
        
                        <input class="waves-effect waves-light btn" type="submit" value="Eliminar" />
                    </form>
                </div>
                `
                
            }
        
        }
    }
}

BienesGuardados()