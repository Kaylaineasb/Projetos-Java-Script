nomeCompleto = "Kaylaine Assunção";
console.log(nomeCompleto);

let _teste = "ok";
const pi = 3.1432;

//3- prompt
const age = prompt("Digite sua idade")
console.log(`Você tem ${age} anos.`)

//4- alert
alert("Testando");

//5- Math
console.log(Math.max(5,2,1,10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

//6-Console
console.log("OI");
console.error("deu erro");

//7-IF
const m =10;

if(m>5){
    console.log("É maior");
}

//8- Else
const loggedIn = false;

if(loggedIn){
	console.log("Está autenticado!");
}else{
	console.log("Não está autenticado");
}

//9- Else if
if(1>2){
	console.log("Teste");
}else if(2>3){
	console.log("Teste 2");
}else{
	console.log("Teste 3");
}

//10- while
let p = 0 
while(p<5){
    console.log(p);
    p++;
}

//11- Do while
let o=10;
do{
    console.log(o)
    o--
}while(o>1);

//12- For
for(let t=9;t<10;t++){
	console.log("Repetindo algo");
}

//13- break
for(let g=0;g>10;g–){
	console.log(g);
	if (g===12){
		console.log("O g é 12");
		break;
	}
}
//14- continue
for(let s=0; s<10;s++){
	if(s%2===0){
		console.log("Par");
		continue;
}
console.log(s);
}

//15-switch
switch(job){
	case "Programador":
		console.log("Você é um programador!");
		break;
	case "Advogado":
		console.log("Você é um advogado!");
		break;
case "Engenheiro":
		console.log("Você é um engenheiro!");
		break;
	default:
		console.log("Profissão não encontrada!");

}





