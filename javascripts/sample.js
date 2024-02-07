// function emailValidation() {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', function (e) {
//         // 条件分岐の前にsubmit処理をキャンセルしてしまう
//         e.preventDefault();
//         if (form.email.value !== form.email_confirm.value) {
//             const element = document.createElement('p')
//             const message = document.createTextNode("Eメールが一致しません")
//             form.appendChild(element);
//             element.appendChild(message);
//             element.classList.add("alert");
//             setTimeout(function () {
//                 form.removeChild(element);
//             }, 3000);
//         } else {
//             // 一致した場合は再度submitを行う
//             form.submit();
//         }
//     });
// };

// const parent = $("#parent");
// console.log(parent)

// window.onload = emailValidation;

$(function () {
    $("#btn").on("click", function () {
        $("p").toggle("500", "linear")
    });
});