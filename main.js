$(document).ready(() => {
    $(".burger-nav").on("click", () => {
        $("header nav ul").toggleClass("open");
    });
    $(".responsive").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
const form = document.forms.form1;
const message = document.getElementById("message");
form.onsubmit = () => {
    if (form.subject.value == "") {
        message.innerHTML = "please input the subject";
        return false;
    }
    if (form.email.value == "") {
        message.innerHTML = "please input the email";
        return false;
    }
    if (form.text.value == "") {
        message.innerHTML = "please input the message";
        return false;
    }
    message.innerHTML = "";
    return true;
}