

  function openFunction(){
   // document.getElementById("nav").style.marginLeft="0";
    document.getElementById("nav-btn").style.visibility="hidden";

    $("#nav").addClass("sticky-menu");
  }
 function closeFunction(){
    // document.getElementById("nav").style.marginLeft="-100px";

     $("#nav").removeClass("sticky-menu");
     document.getElementById("nav-btn").style.visibility="visible";
 }