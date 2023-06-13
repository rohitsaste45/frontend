function addRcord(){
    let inputref = document.querySelector("#messageId");
    let message = inputref.value;
    let uri =`http://localhost:4000/addRecord?message=${message}`;
    fetch(uri);

    inputref.value="";
}

async function readRecord(){
    let uri =`http://localhost:4000/findAllMessage`;
    let res = await fetch(uri);
    
    let list = await res.json();

    console.log(list);

    for(let item of list ){
        let pref = document.querySelector("#parent");
        let evalue = pref.innerHTML;
        let nvalue =`<h>${item.message}</h1>`;
        pref.innerHTML= nvalue +evalue;
        
    }
 
}