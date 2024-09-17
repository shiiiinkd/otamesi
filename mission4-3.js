//試しに編集中


function omikuji() {
    let randomNumber = Math.random();
    let randomNumber5 = Math.floor(randomNumber * 5) + 1;

    let omikujiNumber;
    switch (randomNumber5) {
        case 1:
            omikujiNumber = "大吉です";
            break;
        case 2:
            omikujiNumber = "中吉です";
            break;
        case 3:
            omikujiNumber = "小吉です";
            break;
        case 4:
            omikujiNumber = "吉です";
            break;
        case 5:
            omikujiNumber = "凶です";
            break;
    }

    alert(omikujiNumber);
    let object = document.getElementById("omikuji");
    object.innerText = omikujiNumber;

}
