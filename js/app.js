
// document.querySelector('header-box2');
window.addEventListener('resize', function(event){
    let currentWidth = window.innerWidth;

    console.log(currentWidth);
    
    if(currentWidth > 500){
        document.querySelector('.toggle-fill').style.display = "none";
    }else{
        document.querySelector('.toggle-fill').style.display = "block";
    }
});





