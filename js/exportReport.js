const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

$('#GenerateReport').on("click" , function (event) {
    event.preventDefault();
    CaptureForReport();
    return false;
   });

function CaptureForReport(){
    const form = document.getElementById('downloadExcelReport');
    let ciudad = form.elements["ciudad"]["value"]
    let tipo = form.elements["tipo"]["value"]
    downloadAsExcel(ciudad , tipo)
}

function downloadAsExcel(Ciudad , Tipo){
    const xhttp = new XMLHttpRequest() ; 

    xhttp.open("GET" , "data-1.json" , true)
    xhttp.send()

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText) ; 
            if(Ciudad != "Elige una ciudad" && Tipo != "Elige un tipo"){
                let res = document.querySelector("#ResBienesDisponibles")
                res.innerHTML = "" ; 
                var datos_nuevos = []
                //Seleccion de datos 
                for(let item of datos){
                    if(item.Ciudad == Ciudad && item.Tipo == Tipo){
                        datos_nuevos.push(item)
                    }    
                }    
            }

            const excel_datos = XLSX.utils.json_to_sheet(datos_nuevos)
            var book = {
                Sheets : {
                    'data' : excel_datos
                },
                SheetNames : ['data']
            }
            const excelBuffer = XLSX.write(book , {bookType : 'xlsx' , type:'array'}) ; 
            console.log(excelBuffer) ; 
            saveAsExcel(excelBuffer , 'Excel Reporte') ; 
        }

    }
    
}

function saveAsExcel(buffer , filename){
    const data = new Blob([buffer] , {type : EXCEL_TYPE});
    saveAs(data , filename+'_export_'+new Date().getTime()+EXCEL_EXTENSION)
}