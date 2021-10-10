$(document).ready(function(){

    var $snapshots = [
        ["cont_01.jpg"],
        ["cont_02.jpg"],
        ["cont_03.jpg"],
        ["cont_04.jpg"],
        ["cont_05.jpg"],
        ["cont_06.jpg"],
    ];
    console.log($snapshots);


    var $box =  `
        <div class="img"></div>
    `;
    console.log($box);
    
    for(i=0; i<$snapshots.length; i++){
        $("#snapshots .wrap .box").append($box);
    };

    $("#snapshots .wrap .box .img").each(function(index){
        $(this).css("background-image", "url(./img/"+$snapshots[index][0]+")");
    });
    console.log(this);
    

    // $("#snapshots .button").load("./snapshots_add.html");


  

    $("#snapshots .button").click(function(){

        $(this).hide();

        $("#snapshots .add_html").load("./snapshots_add.html");


        return false;
    });


});