const inputAngka = document.getElementById('batasAngka');

inputAngka.oninput = setBatas;
function setBatas (){
    const batasAngka = inputAngka.value;
    return batasAngka;
}

const btnRandom = document.getElementById('randomAngka');
btnRandom.addEventListener('click',function(){
    const batasan = setBatas();
    const random = Math.round(Math.random() * batasan);
    
    const nilai = document.getElementById('hasilRandom')
    nilai.innerHTML = random;
})
