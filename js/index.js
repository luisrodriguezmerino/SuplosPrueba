/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       
     } else {
        //this.rewind(1.0, video, intervalRewind);
        //video.play();
        
    }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      //video.pause();
    }, 10)
}

function Extract_types_filtres(){

  const xhttp = new XMLHttpRequest() ; 
    
    xhttp.open("GET" , "data-1.json" , true)
    xhttp.send()

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            
            //console.log(this.responseText)
            let datos = JSON.parse(this.responseText) ; 
            
            let res_citys = document.querySelector("#selectCiudad")
            res_citys.innerHTML = "" ; 
            let selectCiudad_Reporte = document.querySelector("#selectCiudad_Reporte")
            selectCiudad_Reporte.innerHTML = "" ; 

            let res_types = document.querySelector("#selectTipo")
            res_types.innerHTML = "" ; 
            let selectTipo_Reporte = document.querySelector("#selectTipo_Reporte")
            selectTipo_Reporte.innerHTML = "" ; 

            let array_citys = ["Elige una ciudad"] // {"Value" : "all" , "Name" : "Elige una ciudad"}
            let array_types = ["Elige un tipo"]
            // Conseguimos los datos 
            for(let item of datos){
              if(array_citys.includes(item.Ciudad) == false){
                array_citys.push(item.Ciudad)
              }
              if(array_types.includes(item.Tipo) == false){
                array_types.push(item.Tipo)
              }
              
            }

            //Para las ciudades
            for(let item of array_citys){
                res_citys.innerHTML += `
                <option value="${item}" selected>${item}</option>
                `
                if(item != "Elige una ciudad"){
                  selectCiudad_Reporte.innerHTML += `
                  <option value="${item}" selected>${item}</option>
                  ` 
                }
                
            }

            //Para los tipos
            for(let itemTypes of array_types){
              res_types.innerHTML += `
              <option value="${itemTypes}" selected>${itemTypes}</option>
              `
              if(itemTypes != "Elige un tipo"){
                selectTipo_Reporte.innerHTML += `
                <option value="${itemTypes}" selected>${itemTypes}</option>
                `
              }
              
            }
            //Definimos selects para la primera opcion
            miSelect_city = document.getElementById("selectCiudad");       
            miSelect_city.selectedIndex = 0;
            miSelect_city_report = document.getElementById("selectCiudad_Reporte");       
            miSelect_city_report.selectedIndex = 0;

            miSelect_type = document.getElementById("selectTipo");
            miSelect_type.selectedIndex = 0;
            miSelect_type_report = document.getElementById("selectTipo_Reporte");
            miSelect_type_report.selectedIndex = 0;
        }
    }
}

Extract_types_filtres(); 
inicializarSlider();
playVideoOnScroll();
