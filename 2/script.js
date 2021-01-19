
function getPilihanKomputer (){
    const komputer = Math.random();

    if(komputer < 0.3) return "boros";
    if(komputer >= 0.3 && komputer < 0.6 ) return "garou";
    return "psykos";
}


function getHasil (komputer,p) {
    if (p == "saitama") return (komputer == "boros" || 
    komputer == "garou" || komputer == "psykos") ? "WIN!" : "LOSE!";
    if (p == "tatsumaki") return (komputer == "garou" || 
    komputer == "psykos") ? "WIN!" : "LOSE!";
    if (p == "genos" || p == "zombie-man"|| p == "drive-knight")
    return (komputer == "garou") ? "DRAW!" : "LOSE!";
    if (p == "fang" || p == "atomic-samurai" || p == "flash" 
    || p == "metal-knight") return (komputer == "garou") ? "WIN!" : "LOSE!";
    if (p == "king" || p == "tank-top" || p == "metal-bat" ) return "LOSE!";
}

function acak() {
    const imgMusuh = document.querySelector(".imgMusuh");
    const gambar = ["garou","boros","psykos"];
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function(){
        if ( new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        }
        imgMusuh.setAttribute("src","img/thumbs/musuh/" + gambar[i++] + ".jpg");

        if ( i == gambar.length ) i = 0;
    },50)
}

const pHero = document.querySelectorAll(".pHero li img");
const imgKita = document.querySelector(".imgKita");
const mulai = document.querySelector(".mulai");

pHero.forEach(function(ev){
    ev.addEventListener("click",function(e){
        // mengganti gambarnya di area player
        imgKita.src = e.target.src;
        // mengganti namanya di area player
        imgKita.nextElementSibling.innerHTML = e.target.nextElementSibling.innerHTML;

        mulai.addEventListener("click",function(){
            const pilihanKomputer = getPilihanKomputer();
            const pilihanPlayer = e.target.className;
            const hasil = getHasil(pilihanKomputer,pilihanPlayer);

            acak();

            setTimeout(function(){
                const imgMusuh = document.querySelector(".imgMusuh");
                const nMusuh = document.querySelector(".nMusuh");
                imgMusuh.setAttribute("src","img/thumbs/musuh/" + pilihanKomputer + ".jpg");
                nMusuh.innerHTML = pilihanKomputer;
            
                const info = document.querySelector(".hasil");
                info.innerHTML = hasil;
            },1000)
        });

        

    });
});

// const mulai = document.querySelector(".mulai");

// mulai.addEventListener("click",function(el){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = mulai.className;
//     const hasil = getHasil(pilihanKomputer,pilihanPlayer);
//     console.log(hasil);
// });

