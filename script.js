document.getElementById("contactForm").addEventListener("submit", function(e){
        e.preventDefault(); // フォームの自動送信を止める

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(!name || !phone || !email || !message){
            alert("すべての項目を入力してください。");
            return;
        }

        // 簡単なメールアドレスチェック
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailPattern.test(email)){
            alert("正しいメールアドレスを入力してください。");
            return;
        }

        alert("送信が完了しました！");
        this.reset(); // フォームをリセット
    });