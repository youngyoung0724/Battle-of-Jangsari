$(document).ready(function(){


    var $character = [
        {$img : "cha_01.jpg", 
        $title : "대위 이명준 역 (김명민)", 
        $p1 : "만약 그들이 전쟁터에 가지 않았더라면,", 
        $p2 :"아마 지금쯤 살아서 멋지게 인생을 살았을 청춘들입니다!", 
        $p3 :"제 목숨을 바꿔서라도! 사람들이, 죽은 그 학도병들을",
        $p4 :"기억하게 할수 있도록 제가 꼭 만들고 싶습니다!"},
    ]; 

    for(i=0; i<$character.length; i++){ //i = 0 -> 1 -> 2
        $("#character .wrap").append(`
        <div class="box">
        <div class="img" style="background-image:url(./img/${$character[i].$img})"></div>
            <div class="txt_part">
            <h2>${$character[i].$title}</h2>
            <p>${$character[i].$p1}</p>
            <p>${$character[i].$p2}</p>
            <p>${$character[i].$p3}</p>
            <p>${$character[i].$p4}</p>
            </div>
        </div>
        `);
    }

    var $character2 = [
        {$img : "cha_02.jpg", 
        $title : "학도병 최성필 역 (최민호)", 
        $p : "같이 집에 가야지!"}

    ]; 

    for(i=0; i<$character2.length; i++){ //i = 0 -> 1 -> 2
        $("#character .wrap").append(`
        <div class="box">
        <div class="img" style="background-image:url(./img/${$character2[i].$img})"></div>
            <div class="txt_part">
            <h2>${$character2[i].$title}</h2>
            <p>${$character2[i].$p}</p>
            </div>
        </div>
        `);
    }

    var $character3 = [
        {$img : "cha_03.jpg", 
        $title : "중대장 박찬년 역 (곽시양)", 
        $p : "기간병은 남고 학도병은 퇴각해"}

    ]; 

    for(i=0; i<$character2.length; i++){ //i = 0 -> 1 -> 2
        $("#character .wrap").append(`
        <div class="box">
        <div class="img" style="background-image:url(./img/${$character3[i].$img})"></div>
            <div class="txt_part">
            <h2>${$character3[i].$title}</h2>
            <p>${$character3[i].$p}</p>
            </div>
        </div>
        `);
    }

    var $character4 = [
        {$img : "cha_05.jpg", 
        $title : "종군기자 매기 역 (매간폭스)", 
        $p : "하지만 구할 수 있는 사람을 못 구하면 우리는 뭐가 될까요?"}

    ]; 

    for(i=0; i<$character4.length; i++){ //i = 0 -> 1 -> 2
        $("#character .wrap").append(`
        <div class="box">
        <div class="img" style="background-image:url(./img/${$character4[i].$img})"></div>
            <div class="txt_part">
            <h2>${$character4[i].$title}</h2>
            <p>${$character4[i].$p}</p>
            </div>
        </div>
        `);
    }




});