$('.apply-slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(email != "customer@gmail.com" || password != "customer") { 
        alert("Email hoặc Password không hợp lệ !");       
    }
    else {
        alert("Đăng nhập thành công !"); 
        window.location.assign("trangchu-dangnhap.html");
    }
}