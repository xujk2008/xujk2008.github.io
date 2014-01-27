function scrollWin()
{
  var p = document.getElementById("front-wrapper");
  var style = p.currentStyle || window.getComputedStyle(p);
  var y = document.getElementById("arrow").offsetHeight + parseInt(style.marginTop);
  
  $(window.opera ? 'html' : 'html, body').animate(
    {scrollTop: y},
    {  queue:    false,
       duration: 2000,
       complete: function(){ 
         document.getElementById("arrow").style.display="none";
         document.getElementById("front-wrapper").setAttribute("style", "margin-top:" + "0px");
         window.scrollTo(0,0);
       }
     }
  );
  
}