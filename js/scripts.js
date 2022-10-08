function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "1234"){
        alert('Sucesso!');
        location.href = "index.html";
    }else{
        alert('Usuario ou senha incorretos!');
    }


}

var arr = [];
 
function addItem(){
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr'));
      alert('Enviado!');
   }
   
   let novoItem = document.getElementById("v").value;
   arr.push(novoItem);
   document.getElementById("v").value = "";
   localStorage.meuArr = JSON.stringify(arr);
}

function showItems(){
   let resultDIV = document.getElementById('d');
   resultDIV.innerHTML = "";
   if (localStorage.meuArr){             
      arr = JSON.parse(localStorage.getItem('meuArr')); 
   }
   
   for(var i in arr){
      let p = document.createElement("p");
      p.innerHTML = arr[i];
      resultDIV.append(p);
   }
}

function clearItems(){
    arr = [];
    localStorage.meuArr = JSON.stringify(arr);   
 }
