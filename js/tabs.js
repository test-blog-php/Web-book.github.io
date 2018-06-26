$(document).ready(function() {
    //Действия по умолчанию
    $(".tab_content:first").addClass("active"); //Показать контент первой вкладки
    
    //Событие по клику
    $("li.tab").click(function() {
        $(".tab_content").removeClass("active"); //Удалить "active" класс
        var activeTab = $(this).find("a").attr("href"); //Найти значение атрибута, чтобы определить активную вкладку + контент
        $(activeTab).addClass("active"); //Исчезновение активного контента
        return false;
    });
});