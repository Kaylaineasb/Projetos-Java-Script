/**
 * JS:Aula7
 */
var valor;
function enviar(){
    valor = parseInt(frm.txt.value);
    document.write("Tabuada do "+valor+"<br>");
    for(var i=1; i<11;i++){
        document.write(valor+" x "+i+" = "+(valor*i)+"<br>");
    }
}
