$(".sidebar ul li").on('click', function () {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function () {
    $('.sidebar').addClass('active');

});


$('.close-btn').on('click', function () {
    $('.sidebar').removeClass('active');

})


const dropClick = document.querySelector(".drp_click"); 

dropClick.addEventListener("click", function () {
  document.querySelector(".dropdown_menu").classList.toggle("d-block"); 

});
  