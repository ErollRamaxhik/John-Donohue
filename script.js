"use strict"
 
 //Back button
 function goBack() {
    window.history.back();}

  //Navigation ve Scroll
  let nav = document.querySelector("nav");
    
    nav.addEventListener('click',function(e){
        if(e.target.id!==null){
            var getInput = e.target.id;
            localStorage.setItem("navigator",getInput);
        }
        
      
    })

    //Navigation ve Scroll 
    setTimeout(() => {
      if((localStorage.getItem("navigator"))!==""){
        let target=localStorage.getItem("navigator");
      window.localStorage.clear();
      let navigator = document.getElementById(target);
      if(navigator!==null){
        navigator.scrollIntoView();
      }
      
      } 
    }, 500);

    //Show More & Show Less

    const showBtn = document.querySelector('.showBtn');
    const text = document.querySelector('.text');

    showBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      text.classList.toggle('show');
      if(showBtn.textContent=='Show More'){
        showBtn.textContent='Show Less';
      }else{
        showBtn.textContent='Show More';
      }
      
    })

// VENOBOX SCRIPT
$(document).ready(function(){
  $('.venobox').venobox(); 
});

$(".venobox_custom").venobox({
  framewidth: "400px", // default: ''
  frameheight: "300px", // default: ''
  border: "10px", // default: '0'
  bgcolor: "#5dff5e", // default: '#fff'
  titleattr: "data-title", // default: 'title'
  numeratio: true, // default: false
  infinigall: true, // default: false
  share: ["facebook", "twitter", "download"], // default: [],
  overlayColor: "rgba(255,255,255,0.9)",
});

$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});