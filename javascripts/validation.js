function emailValidation() {
    const form = document.getElementById('form');
    const email_confirm = document.getElementById('email_confirm');
    const element = document.createElement('p')
    const message = document.createTextNode("Eメールが一致しません")
    const content_field = document.getElementById('content_field');
    // Eメール(確認用)フォームの下部”Eメールが一致しません”というエラーメッセージの文字色を#d14539にする。
    element.style.color = '#d14539';

    // 　addEventListenerのイベント設定の変更：入力時にアラート表示される
    email_confirm.addEventListener('input', e => {
        e.preventDefault();
        if (form.email.value !== form.email_confirm.value) {
          // alert class does not exist, add alert element
          if (document.getElementsByClassName("alert").length === 0) {
             //form.appendChild(element);
             element.appendChild(message);
        // <内容の>前に、<p>要素を追加し、＜内容＞の前にエラー表示させる（<table>タグの構成要素）。
            content_field.parentNode.insertBefore(element, content_field)
            email_confirm.classList.add("alert");
          }

        } else {
            // （Eメールが同じ場合は、フォームの背景色を表示させない
            email_confirm.classList.remove("alert")

            // （Eメールが同じ場合は、エラーメッセージを表示させない）
            element.parentNode.removeChild(element)

        }
    });
};


window.onload = emailValidation;