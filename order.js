let itemOrder =[
    {
        dipesan :false,
        harga : 15000,
        nama : 'Ayam Geprek'
    },
    {
        dipesan :false,
        harga : 17000,
        nama : 'Ayam Bakar'
    },
    {
        dipesan :false,
        harga : 20000,
        nama : 'Ayam Penyet'
    }
]

let totalOrder = 0;

const textTotal = document.getElementById('last-item');

const itemTerpilih = document.getElementsByClassName('item');

for(let i = 0; i < itemTerpilih.length; i++){
    itemTerpilih[i].addEventListener('click', function(){
        setItemPemesanan(i, itemTerpilih[i]);
    });
}

function setItemPemesanan(index, elemen){
    if (itemOrder[index].dipesan == false){
        itemOrder[index].dipesan = true;
        elemen.style.background = 'brown';
        elemen.style.color = 'white';
        totalOrder = totalOrder + itemOrder[index].harga;
    }
    else{
        itemOrder[index].dipesan = false;
        elemen.style.background = 'aqua';
        elemen.style.color = 'black';
        totalOrder = totalOrder - itemOrder[index].harga;
    }
    textTotal.innerHTML = "Total <span>Rp " + totalOrder + "</span>"
}