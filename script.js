$(document).ready(function () {
    const menus = [
        { name: "唐揚げ", img:"1.karaage.jpeg" },
        { name: "ブリの照り焼き", img: "2.Buriteri.jpeg" },
        { name: "グラタン", img: "3.Gratan.jpeg" }, 
        { name: "春巻き", img: "4.Harumaki.jpeg" },
        { name: "豚の生姜焼き", img: "5.Porksyoga.jpeg" },
        { name: "焼き魚", img: "6.Yakizakana.jpeg" },
        { name: "チップご飯", img: "7.Turkeyrice.jpeg" },
        { name: "刺身＆いくら", img: "8.Sasimi&ikura.jpeg" },
        { name: "ルーロー飯", img: "9.rurofan.jpeg" },
        { name: "鍋", img: "10.nabe.jpeg" },
        { name: "魚フライ", img: "11.friedfish.jpeg" },
        { name: "餃子", img: "12.Gyoza.jpeg" },
        { name: "UBER EATS!!!", img: "13.UberEats1.png" },
        { name: "カレー", img: "14.curry.jpeg" },
        { name: "鍋", img: "15.nabe.jpeg" },
    ];
    // これでインデックスを記録できる
    let usedMenus = [];

    // 日付をYY/MM/DD形式で取得する関数
    function getCurrentDate() {
        const date = new Date();
        return `${date.getFullYear().toString().slice(-2)}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
    }


   // $("#generate").click(function () {
     //   const formattedDate = getCurrentDate();
     //   const randomIndex = Math.floor(Math.random() * menus.length);
     //   const selectedMenu = menus[randomIndex].name;

    $("#generate").click(function () {
        if (usedMenus.length === menus.length) {
            // 全てのメニューを使い切った場合、リセット
            usedMenus = [];
        }

        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * menus.length);
        } while (usedMenus.includes(randomIndex));

        usedMenus.push(randomIndex);
        const selectedMenu = menus[randomIndex].name;
        const selectedImg = menus[randomIndex].img;
        const formattedDate = getCurrentDate();
    
        // メニューと日付を表示
        $("#menu").text(selectedMenu);
        $("#menu-image").attr("src", `img/${selectedImg}`);

        // 選択された料理を履歴に追加
        const row = `<tr><td>${formattedDate}</td><td>${selectedMenu}</td><td>${randomIndex + 1}</td></tr>`;
        $("#history tbody").append(row);
    });
});
