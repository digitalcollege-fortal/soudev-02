let produtos = [];

function adicionarItem(){
    produtos.push(item.value);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    listarItems();
}

function listarItems(){
    let items = JSON.parse(localStorage.getItem("produtos"));
    lista.innerHTML = "";
    
    if(items && items.length > 0){
        produtos = items;
        for(let i = 0; i < items.length; i++){
            lista.innerHTML += `<li class="list-group-item">${items[i]}</li>`;
        }
    }
}
listarItems();

