

const checkbox = document.getElementById("checkbox")
let isdark=true;
checkbox.addEventListener('click',()=>{
  document.body.classList.toggle('text-bg-dark')
  if (isdark) {
    btn_dark.textContent="light"
    
    isdark=false;
  }
  else{
    btn_dark.textContent="dark"
    
    isdark=true;
  }
})

jquery(document).ready(function(){
  $(".dropdown").hover(
    function(){$('.dropdown-menu',this).fadein("slow");

    },
    function(){$('.dropdown-menu',this).fadeout("slow");

  } );
 
});
