
//shopping cart

const Modal = {

    shopModal() {
        let open = document.getElementById("my_cart");

        if (open.style.display != "block") {
            open.style.display = "block";
        } else {
            open.style.display = "none";
        }
    },

    wishModal() {
        let open = document.getElementById("my_fav");

        if (open.style.display != "block") {
            open.style.display = "block";
        } else {
            open.style.display = "none";
        }
    },

    User() {
        let open = document.getElementById('loging');
        if (open.style.display != "block") {
            open.style.display = "block";
        } else {
            open.style.display = "none";
        }
    },

    Sing_in() {
        document.querySelector('.Sing_in').classList.add('opened');
    },

    Sing_inClose() {
        document.querySelector('.Sing_in').classList.remove('opened')
    }
}


//==== product ===== 
// next and preview

const slide = {

    index: 1 ,
    
    plusSlides(n) {
        slide.showSlides(slide.index += n)
    },
    
    current(n){
        slide.showSlides(slide.index = n)
    },
    
    showSlides(n) {
        var i;
        let slides = document.getElementsByClassName("images_slide");
        if (n > slides.length) { slide.index = 1 }
        if (n < 1) { slide.index = slides.length }
        for ( i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        slides[slide.index - 1].style.display = "block"      
    
        console.log(n)
    }
}

slide.showSlides(slide.index)