

// $(function(){

//     // $("#abc") : 아이디값이 abc인 노드를 선택
//     // $(".abc"): 클래스값이 abc인 노드를 선택
//     // $("abc") : 태그명이 abc인 노드를 선택
//     // $("abc, p, #nav") : 태그명이 abc , p, #nav노드를 선택

// // this라는건 div를 의미한다.
// //text()는 적어준 글자가 해당 노트에 나타나도록 해주는 기능
//     // $("div,p").click(function(){
//     //     $(this).text("hello world")
//     // });

//     // $("p").click(function(){
//     //     $(this).addClass("des");
//     // });
  

//     var divleft = $("#maindiv3_main");

//      $(".fa-angle-left").click(function(){
//          left();
//      });

//      $(".fa-angle-right").click(function(){
//         right();
//     });
    
    
//     function left(){
//         divleft.animate({
//             left:'+=1280px'
//         });
//         console.log("함수들감");
//     }        
//         function right(){
//             divleft.animate({
//                 left:'-=1280px'
//             });
//             console.log("함수들감");
//         }




//     // // let divleft = document.querySelector("#maindiv3_main").style.left;
//     // }
// });

    // var i1 = document.getElementsByClassName('fa-angle-left');
    // var i2 = document.getElementsByClassName('fa-angle-right');
    // var divleft = document.querySelector("#mainDiv3_main");
    // var divleft1 = divleft. currentStyle.left;

    // i1.onclick = function(){
    //     divleft1 = "-1280px";
    // }



    function myFunction1() {
       
        let obj = document.getElementById("mainDiv3_main");
        let objleft = obj.style.left;
      
       
        console.log(objleft);
        if(objleft==0 || objleft=="0px"){
            obj.style.left="-3840px";
            obj.style.transition=" all 0.5s";
        }else if(objleft == "-3840px"){
            obj.style.left="-2560px";
            obj.style.transition=" all 0.5s";
        }else if(objleft == "-2560px"){
            obj.style.left="-1280px";
            obj.style.transition=" all 0.5s";
        }else if(objleft == "-1280px"){
            obj.style.left=0;
            
        }
        
        
    }
    function myFunction() {
        // document.getElementById("mainDiv3_main").classList.toggle("show");
        let obj = document.getElementById("mainDiv3_main");
        let objleft = obj.style.left;
        
        // let num =-1280;
        // obj.style.left=(objleft+num)+"px";
        console.log(objleft);
        if(objleft==0 || objleft=="0px"){
            obj.style.left="-1280px";
            obj.style.transition=" all 0.5s";
        }else if(objleft == "-1280px"){
            obj.style.left="-2560px";
            obj.style.transition=" all 0.5s";
        }else if(objleft == "-2560px"){
            obj.style.left="-3840px";
            obj.style.transition=" all 0.5s";
        }else if(objleft == "-3840px"){
            obj.style.left=0;
        }
        
        
    }
    
    let num=1;
function myFunction2() {

    if(num==1){
        num = 5;
    }else if(num ==5){
        num=4;
    }else if(num ==4){
        num=3;
    }else if(num ==3){
        num=2;
    }else if(num ==2){
        num=1;
    }

    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src","image/S"+num+".jpg");
    
}

function myFunction3() {

    if(num==1){
        num = 2;
    }else if(num ==2){
        num=3;
    }else if(num ==3){
        num=4;
    }else if(num ==4){
        num=5;
    }else if(num ==5){
        num=1;
    }

    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src","image/S"+num+".jpg");
    
}
