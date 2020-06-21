$(document).ready(function(){
    $("#video2").hide();

    $("#home-tab").click(function(){
        $("#video2").hide()
        $("#video1").show();

    })
    $("#video-2").click(function(){
        $("#video1").hide();
        $("#video2").show();
    })

})
