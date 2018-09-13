$(document).ready(function () {
    var token = '7849220073.043c875.45292ddb5bf3441489ff47fd27b1ac03';
    var imgUrl = [];

    $.ajax({
        url: 'https://api.instagram.com/v1/users/self/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: token
        },
        success: function (data) {
            for (x in data.data) {
                imgUrl.push(data.data[x].images.low_resolution.url);
            }
            $(".slide1").css("background-image", `url(${imgUrl[0]}`);
            $(".slide2").css("background-image", `url(${imgUrl[1]}`);
            $(".slide3").css("background-image", `url(${imgUrl[2]}`);
            $(".slide4").css("background-image", `url(${imgUrl[3]}`);
        },
        error: function (data) {
            console.log(data);
        }
    });

    var slideIndex = 0;
    var slideIndex1 = 1;
    var slideIndex2 = 2;
    var slideIndex3 = 3;

    $('.arrow-right').click(function () {
        if (slideIndex == imgUrl.length - 1) slideIndex = 0;
        else showDivs(slideIndex += 1);
        if (slideIndex1 == imgUrl.length - 1) slideIndex1 = 0;
        else showDivs(slideIndex1 += 1);
        if (slideIndex2 == imgUrl.length - 1) slideIndex2 = 0;
        else showDivs(slideIndex2 += 1);
        if (slideIndex3 == imgUrl.length - 1) slideIndex3 = 0;
        else showDivs(slideIndex3 += 1);
    })
    $('.arrow-left').click(function () {
        if (slideIndex == 0) slideIndex = imgUrl.length - 1;
        else showDivs(slideIndex -= 1);
        if (slideIndex1 == 0) slideIndex1 = imgUrl.length - 1;
        else showDivs(slideIndex1 -= 1);
        if (slideIndex2 == 0) slideIndex2 = imgUrl.length - 1;
        else showDivs(slideIndex2 -= 1);
        if (slideIndex3 == 0) slideIndex3 = imgUrl.length - 1;
        else showDivs(slideIndex3 -= 1);
    })

    function showDivs() {
        $(".slide1").css("background-image", `url(${imgUrl[slideIndex]}`);
        $(".slide2").css("background-image", `url(${imgUrl[slideIndex1]}`);
        $(".slide3").css("background-image", `url(${imgUrl[slideIndex2]}`);
        $(".slide4").css("background-image", `url(${imgUrl[slideIndex3]}`);
    }

    // humburger menu
    $('#nav-icon').click(function(){
        $(this).toggleClass('open');
        $('#showMenu').toggleClass('show');
    });
    $('#nav-item, #nav-item1, #nav-item2, #nav-item3').click(function(){
        $('#nav-icon').toggleClass('open');
        $('#showMenu').toggleClass('show');
	});

});