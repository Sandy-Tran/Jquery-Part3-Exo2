var counter = 0;

$(document).ready(function(){
    $(".increase").click(function(){
        counter++
        $("input").val(counter);
    })
    $(".decrease").click(function(){
        counter--
        $("input").val(counter);
    })
})