const priceElement = document.getElementById("product"); // sale.htmlのid = "product"よりデータをとってくる
const numberElement = document.getElementById("number");
const product = document.getElementById("product");
let purchases = [];

// (表示する金額・id・商品名の内容を追加)①商品データを管理するオブジェクトを作成する
const products = [
    {
        id: 1,
        name: "オリジナルブレンド200g 500円",
        price: 500        
    },
    {
        id: 2,
        name: "オリジナルブレンド500g 900円",
        price: 900      
    },
    {
        id: 3,
        name: "スペシャルブレンド200g 700円",
        price: 700        
    },
    {
        id: 4,
        name: "スペシャルブレンド500g 1200円",
        price: 1200        
    }
]

// 2. 追加ボタンをクリックした時に、商品データの中から該当商品を特定して扱えるようにする
function add() {
    const price = parseInt(priceElement.value);
    const number = parseInt(numberElement.value);
    const selectedProduct=products[product.selectedIndex -1]
    let purchase = {
        price: price,
        number: number,
        product: selectedProduct,
    };

    let newPurchase = true; //--1

    purchases.forEach((item) => {  //--2
        if (item.price === purchase.price) {
            newPurchase = false;
        }
    })

    if (purchases.length < 1 || newPurchase) { //--3
        purchases.push(purchase);
    } else {
        for (let i = 0; i < purchases.length; i++) {
            if (purchases[i].price === purchase.price) {
                purchases[i].number += purchase.number;
            }
        }
    }
    // 追加ボタンをクリックした時に、商品名も表示する。（金額、数量、商品名を表示）
    window.alert(`${display()}\n小計${subtotal()}円`);
    priceElement.value = "";
    numberElement.value = "";
    products.value = "";    
}

// 購入履歴の内容の文字列（「（商品名）+○○円が○点、」）を返す関数、display()関数
function display() {
    let string = "";
    // 合計を算出する処理
    for (let i = 0; i < purchases.length; i++) {
     // 購入履歴の内容の文字列（「○○円（商品名+価格:product.name）が○（${purchases[i].number}）点、」）を返す関数、display()関数
        string += `${purchases[i].product.name}が${purchases[i].number}点\n`;
    }
    return string;
}

// 小計を算出する関数subtotal()関数
function subtotal() {
    let sum = 0;
    // 合計を算出する処理
    for(let i=0; i<purchases.length; i++){
        sum += purchases[i].price * purchases[i].number ;
}
 return sum;
}

function calc() {
    const sum = subtotal();
    const postage = calcPostageFromPurchase(sum)
    // stringは別のオブジェクトなので利用できないので、別（meessage）で同じ内容を作る。
    let message = "";
 
    for (let i = 0; i < purchases.length; i++) {
        message += `${purchases[i].product.name}が${purchases[i].number}点\n`;
    }

    // 合計金額をクリックした際「○○が○点、○○が○点、小計○○円」とポップアップする処理を加える。
    window.alert(`${message} 送料は${postage}円です。合計は${sum + postage}円です`);

    purchases = [];
    priceElement.value = "";
    numberElement.value = "";
}


// subtotal()関数の値を利用するように書き換える。
function calcPostageFromPurchase(sum) {
  // 条件分岐とreturn
if (sum == 0 || sum >= 3000) {
    return 0 ;
} else if  (sum < 2000) {
    return 500 ;
} else {
    return 250 ;
}
}
