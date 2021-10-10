$(document).ready(function(){

    var $snapshots_add = [
        ["cont_07.jpg"],
        ["cont_08.jpg"],
        ["cont_09.jpg"],
        ["cont_10.jpg"],
        ["cont_11.jpg"],
        ["cont_12.jpg"],
        ["cont_13.jpg"],
        ["cont_14.jpg"],
    ];
    console.log($snapshots_add);


    var $box =  `
        <div class="img"></div>
    `;
    console.log($box);
    
    for(i=0; i<$snapshots_add.length; i++){
        $("#snapshots_add .wrap .box").append($box);
    };

    $("#snapshots_add .wrap .box .img").each(function(index){
        $(this).css("background-image", "url(./img/"+$snapshots_add[index][0]+")");
    });
    console.log(this);



});