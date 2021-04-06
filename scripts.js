// mobile menu
function Navfunction(x) {

    x.classList.toggle("change");

    let topnav = document.getElementById('topnav');
    if (topnav.style.display != "block") {
        topnav.style.display = "block";
    } else {
        topnav.style.display = "none";
    }
    console.log(topnav.style.display)

}

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

    }
}


//Slides show
let slideIndex = 0;
showSlides();
function showSlides() {
    let content = document.getElementsByClassName("offer");

    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";

    }
    slideIndex++
    if (slideIndex > content.length) { slideIndex = 1 }
    content[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

//favorite

const Wish = {

    description: null,

    favorite(clicked_id) {

        let white = document.getElementById(clicked_id);
        let product = document.getElementsByClassName(clicked_id);
        description = product.item(0).innerText ;      
        
       
        if (white.style.fill != "black") {
            white.style.fill = "black";
            Wish.addFavorite();

        }
        else {
            white.style.fill = "rgb(189, 186, 186)";
            Wish.removeItem(description);
        }
        console.log(description)
        console.log(white)
        
    },

    addFavorite() {
        let x = description
        let ul = document.getElementById("list");
        let li = document.createElement('li');
        li.setAttribute('id', x);
        li.setAttribute('onclick', 'Wish.removeItem(this.id)')
        li.appendChild(document.createTextNode(x));
        ul.appendChild(li);
        console.log(ul)

    },

    removeItem(clicked_id) {

        let x = document.getElementById(clicked_id);
        x.remove();
    }
}






//show top button

let top_button = document.getElementById('top-button')
let topnav = document.getElementById('topnav');
window.onresize = function () {
    let x = window.innerWidth;
    if (x > 700) {
        topnav.style.display = "block";
    }
    else {
        topnav.style.display = "none";
    }

    console.log(x)
}




let onScroll = function () {
    var y = window.scrollY;
    if (y >= 300) {
        top_button.style.display = "block";
    }
    else {
        top_button.style.display = "none";
    }
}


window.addEventListener("scroll", onScroll);

// scroll to top 
function topHome() {
    top_button.scrollTo = 0
    document.documentElement.scrollTop = 0;
}