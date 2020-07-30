

let divleft = document.getElementById("mainDiv3_main").style.left;

$(function(){

    // $("#abc") : 아이디값이 abc인 노드를 선택
    // $(".abc"): 클래스값이 abc인 노드를 선택
    // $("abc") : 태그명이 abc인 노드를 선택
    // $("abc, p, #nav") : 태그명이 abc , p, #nav노드를 선택

// this라는건 div를 의미한다.
//text()는 적어준 글자가 해당 노트에 나타나도록 해주는 기능
    // $("div,p").click(function(){
    //     $(this).text("hello world")
    // });

    // $("p").click(function(){
    //     $(this).addClass("des");
    // });
  
     $(".fa-angle-left").click(function(){
         left();
        $("#mainDiv3_main").addClass("next");
         
     });

     $(".fa-angle-right").click(function(){
        right();
        $("#mainDiv3_main").addClass("back");
    });
    

   


});

function left(){
    divleft="2560";
}
function right(){
    divleft+="1280";
}