function tampilkanGif() {
    let gifHTML = "";

    if (count >= 10) {
        gifHTML = `<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3BubWN0NzF3bTNvbTk4MXdhOTFteGcycWF5dGY4eWlvZmd1Y2h2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B5BfWWr1UnVrG/giphy.gif" class="w-64 rounded-xl shadow-lg">`;
    } else if (count >= 5) {
        gifHTML = `<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3BubWN0NzF3bTNvbTk4MXdhOTFteGcycWF5dGY4eWlvZmd1Y2h2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4Yf1vRJSItODcVGu9V/giphy.gif" class="w-64 rounded-xl shadow-lg">`;
    } else if (count >= 3) {
        gifHTML = `<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3BubWN0NzF3bTNvbTk4MXdhOTFteGcycWF5dGY4eWlvZmd1Y2h2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT5LMDwqFuSfkEmqeA/giphy.gif" class="w-64 rounded-xl shadow-lg">`;
    } else {
        gifHTML = "";
    }

    gifContainer.innerHTML = gifHTML;
}

function tambah(){
    count++;
    number.innerText = count;
    tampilkanGif();
}

function kurang(){
    count--;
    number.innerText = count;
    tampilkanGif();
}

btnTambah.addEventListener("click", tambah);
btnKurang.addEventListener("click", kurang);