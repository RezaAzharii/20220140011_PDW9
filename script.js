var gambar = ['./aset/Bob2.jpg', './aset/jj.jpg', './aset/bg1.jpg']; // Tambahkan lebih banyak jalur gambar jika diperlukan
        var indeksSaatIni = 0;
        var elemenGambar = document.getElementById('image1');

        function gantiGambar() {
            indeksSaatIni = (indeksSaatIni + 1) % gambar.length;
            elemenGambar.src = gambar[indeksSaatIni];
        }

        setInterval(gantiGambar, 2500); // Ganti gambar setiap 3 detik

        function ImageN() {
            // Contoh: Ganti sumber gambar saat tombol diklik
            gantiGambar();
        }

function ShowPopup() {
    var infoPopup = document.querySelector('.infopopup');
    infoPopup.style.display = 'block';
}

function HidePopup() {
    var infoPopup = document.querySelector('.infopopup');
    infoPopup.style.display = 'none';
}

document.getElementById('popup').addEventListener('click', ShowPopup);

function ImageN() {
    alert("Image akan berubah jika rasio diabawah 600");
}
  
function VidN() {
    alert("Dancing and Chill");
}


const allStar = document.querySelectorAll('.rating .star')

allStar.forEach((item, idx)=>{
    item.addEventListener('click', function(){
        allStar.forEach(i=> {
            i.classList.replace('bxs-star', 'bx-star')
            i.classList.add('active')
        })
        for(let i=0; i<allStar.length; i++) {
            if(i <= idx) {
                allStar[i].classList.replace('bx-star', 'bxs-star')
                allStar[i].classList.add('active')
            }
        }
    })
})