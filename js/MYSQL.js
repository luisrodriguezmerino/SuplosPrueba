jQuery(document).on("submit" , "#form_insert", function(event){
    event.preventDefault();

    jQuery.ajax({
        url: 'php/addToDB.php' , 
        type : 'POST' , 
        dataType : 'json' , 
        data : $(this).serialize()
    })
    .done(function(respuesta) { 
        console.log(respuesta)
        if(!respuesta.error){
            alert('Los datos se ingresaron con Exito!')
        }else{
            alert("Los datos no se pudieron guardar :(")
        }
    })
    .fail(function(resp){
        console.log(resp.responseText)
    })
    .always(function(){
        console.log("complete")
    })
})

jQuery(document).on("submit" , "#form_delete", function(event){
    event.preventDefault();

    jQuery.ajax({
        url: 'php/deleteData.php' , 
        type : 'POST' , 
        dataType : 'json' , 
        data : $(this).serialize()
    })
    .done(function(respuesta) { 
        console.log(respuesta)
        if(!respuesta.error){
            alert('Se borro con exito Exito!')
        }else{
            alert("Hubo un error , no se pudo borrar de la DB.")
        }
    })
    .fail(function(resp){
        console.log(resp.responseText)
    })
    .always(function(){
        console.log("complete")
    })
})