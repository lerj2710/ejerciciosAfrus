 let contenido = document.getElementById('container');

 const calumn = ['colum1','colum2','colum3','colum4','colum5',
                'colum6','colum7','colum8','colum9','colum10',
                'colum11','colum12','colum13','colum14','colum15'];

 for (let colums of calumn ) {
     
    contenido.innerHTML += `<div>${colums}</div>`
    console.log(colums);
}



// var a = parseInt(prompt("Imgresa un numero"));