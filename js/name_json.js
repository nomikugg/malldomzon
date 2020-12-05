// function userTemplate({ nombre, ciudad, plan}) {
//     return (
//       '<li class="user" id="user' + id + '">' +
//         '<p class="user"><b>' + nombre + '</b><span> -- ' + ciudad + '</p>' +
//         '<address>'+ address.street + " " + address.suite + ", " + address.city +'</address>' +
//       '</li>'
//     );
//   }
document.querySelector('#button').addEventListener('click', traerDatos);

function traerDatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../json/api.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            // console.log(this.responseText);
            let datosNuevos = JSON.parse(this.responseText)
            // console.log(datosNuevos);
            
            // Math.floor(Math.random() * (max - min)) + min;
            datosNuevos.forEach(myfunction);

            function myfunction(item, index){
                document.getElementById('#res').innerHTML += `<tr>
                <td>${item.nombre}</td>
                <td${item.ciudad}</td>
                </tr>
                `;
            }
            
        }
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let datoRandom = getRandomInt(0,26);
