function toggleChat(){

let chat = document.getElementById("chat");

let icon = document.getElementById("chatIcon");


if(chat.style.display==="flex"){

chat.style.display="none";

icon.src="icone-dormindo.png";


}else{

chat.style.display="flex";

icon.src="icone-acordado.png";

}

}




function sendMessage(){

let input = document.getElementById("text");

let message = input.value;



if(message==="") return;



let messages = document.getElementById("messages");



messages.innerHTML +=

`<div class="user">${message}</div>`



setTimeout(()=>{

messages.innerHTML +=

`<div class="bot">resposta exemplo</div>`

},500)



input.value="";

messages.scrollTop = messages.scrollHeight;

}