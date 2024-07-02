let currentSlide = 0;
const url = new URL(window.location.href), params = url.searchParams;
let page_num = params.get("page"), nav_menu_li = document.querySelectorAll("ul.navbar-nav li"),
    nav_menu_items = document.querySelector("ul.navbar-nav a.nav-link");
page_num && (currentSlide = page_num - 1);
let slides = document.querySelectorAll(".slide"), prevButton = document.querySelector(".prev"),
    nextButton = document.querySelector(".next");

function changeSlide(e) {
    slides.forEach(e => e.style.display = "none"), "next" === e ? currentSlide = currentSlide % 3 + 1 : "prev" === e && (currentSlide = (currentSlide + 1) % 3 || 3), document.querySelector(`#slide-${currentSlide}`).style.display = "block", window.history.pushState({}, "", `?page=${currentSlide}`), nav_menu_items.classList.remove("active"), nav_menu_li[currentSlide - 1].getElementsByTagName("a")[0].classList.add("active"), window.scrollTo(0, 0)
}

function setVideoFrame() {
    document.getElementById("videoFrame").src = "http://example.com/"
}

prevButton.addEventListener("click", () => changeSlide("prev")), nextButton.addEventListener("click", () => changeSlide("next")), changeSlide("next"), $(document).ready(function () {
    AOS.init();

    // show element after page loads
    $('.animated-gif a').show();
}), $(document).on("click", function () {
    $(".collapse").collapse("hide")
}), window.addEventListener ? window.addEventListener("load", setVideoFrame, !1) : window.attachEvent ? window.attachEvent("onload", setVideoFrame) : setVideoFrame();