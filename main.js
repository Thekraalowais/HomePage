
var myButtom=document.getElementById('goup');
window.onscroll=function(){
  'use strict';
  if(window.pageYOffset>=400){
    console.log(window.pageYOffset + " BLOCK");
    // myButtom.diplay='block';
  }else{
    console.log(window.pageYOffset + " NONE");
      // myButtom.diplay='none';
  }
};
