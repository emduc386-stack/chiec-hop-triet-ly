document.addEventListener("DOMContentLoaded", () => {

    const path = window.location.pathname;

    let prefix = "";

    if(path.includes("/pages/")){
        prefix = "../";
    }

    const page = path.split("/").pop();

    let active = "home";

    if(page === "choose-box.html"){
        active = "box";
    }else if(page === "history.html" || page === "history-detail.html"){
        active = "history";
    }else if(page === "setting.html"){
        active = "setting";
    }

    document.body.insertAdjacentHTML("beforeend",`

<div class="bottomNav">

<a href="${prefix}index.html"
class="navItem ${active==="home"?"active":""}">
<span>🏠</span>
Trang chủ
</a>

<a href="${prefix}pages/choose-box.html"
class="navItem ${active==="box"?"active":""}">
<span>📦</span>
Hộp
</a>

<a href="${prefix}pages/history.html"
class="navItem ${active==="history"?"active":""}">
<span>📖</span>
Lịch sử
</a>

<a href="#"
class="navItem ${active==="setting"?"active":""}">
<span>⚙️</span>
Cài đặt
</a>

</div>

`);

});
