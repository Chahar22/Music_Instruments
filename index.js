
var n=document.querySelectorAll(".drum").length;

//Using click

for(let i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{   
    var btn=this.innerHTML;
    
    ring(btn);
});
}

//Using keyboard

document.addEventListener("keypress",function(event){
    //console.log(event);
    ring(event.key);
    //alert("key is pressed");
})

function ring(key)
{
    switch(key)
    {
        case 'w':
            document.querySelectorAll(".drum")[0].style.background = "yellow";
            document.body.style.background = "yellow";
            audio=new Audio('sounds/crash.mp3');
             audio.play();
        break;
       case 'a':
        document.querySelectorAll(".drum")[1].style.background = "green";
        document.body.style.background = "green";
            audio=new Audio('sounds/kick-bass.mp3');
             audio.play();
       break;
       case 's':
        document.querySelectorAll(".drum")[2].style.background = "red";
        document.body.style.background = "red";
        audio=new Audio('sounds/snare.mp3');
         audio.play();
       break;
       case 'd':
        document.querySelectorAll(".drum")[3].style.background = "blue";
        document.body.style.background = "blue";
            audio=new Audio('sounds/tom-1.mp3');
             audio.play();
        break;
       case 'j':
        document.querySelectorAll(".drum")[4].style.background = "pink";
        document.body.style.background = "pink";
            audio=new Audio('sounds/tom-2.mp3');
             audio.play();
       break;
       case 'k':
        document.querySelectorAll(".drum")[5].style.background = "violet";
        document.body.style.background = "violet";
        audio=new Audio('sounds/tom-3.mp3');
         audio.play();
       break;                  
       case 'l':
           
          document.querySelectorAll(".drum")[6].style.background = "lawngreen";
        document.body.style.background = "lawngreen";
        audio=new Audio('sounds/tom-4.mp3');
         audio.play();
       break;                  
    }
}


