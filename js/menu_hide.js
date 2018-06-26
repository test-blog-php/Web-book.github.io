var main = function() { //главная функция
    $('.menu-button').click(function() { 
      
        if(!$('.menu-button').hasClass('action'))/*проверка на наличие класса action*/
        {  
            /*добавление класса action*/
            $('.menu-button').addClass('action')

            /*двигаем сайдбар и контент*/
            $('.sidebar').css("left", "-325px")
            $('.content').css("width", "calc(100% - 10px)");

            /*двигаем кнопку и header*/
            $('.menu-button').css("width", "90px")
            $('.menu-button i').css("left", "85px")
            $('.header').css("width", "calc(100% - 155px)")

        }
        else
        {
            /*удаление класса action*/
            $('.menu-button').removeClass('action')

            /*двигаем сайдбар и контент*/
            $('.sidebar').css("left", "0px")
            $('.content').css("width", "calc(100% - 335px)");

            /*двигаем кнопку и header*/
            $('.menu-button').css("width", "300px")
            $('.menu-button i').css("left", "294px")
            $('.header').css("width", "calc(100% - 365px)")
        }
    });

};

$(document).ready(main); //как только страница полностью загрузится, будет вызвана функция main, отвечающая за работу меню
