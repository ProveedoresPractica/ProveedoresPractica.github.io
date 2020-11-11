"use strict";

var forma = document.getElementById("forma"),
    clave = forma["clave"],
    nombre = forma["nombre"],
    telefono = forma["telefono"],
    txtFecha = forma["fecha"],
    salidaClave = document.getElementById("salidaClave"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaTelefono = document.getElementById("salidaTelefono"),
    salidaFecha = document.getElementById("salidaFecha");
    
 function procesa(){
   var fechaValueAsDate = txtFecha.valueAsDate,
        fecha = new Date(txtFecha.value),
       clave = forma["clave"].value,
       nombre = forma["nombre"].value,
       telefono = forma["telefono"].value,
       miFecha;
     salidaClave.textContent = clave;
     salidaNombre.textContent = nombre;
     salidaTelefono.textContent = telefono;
     miFecha = (fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
     salidaFecha.textContent = miFecha;
 }
 function limpiar(){
 forma["clave"].value="";
 forma["nombre"].value="";
 forma["telefono"].value="";
 forma["fecha"].value="";
 document.getElementById("salidaClave").value ="";
 document.getElementById("salidaNombre").value ="";
 document.getElementById("salidaTelefono").value ="";
 document.getElementById("salidaFecha").value ="";
 document.getElementById("salidaFecha1").value="";
 }
