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

//Form

let Fname;
let Email;
let Birth;
let Phone;
let Check;

let SubmitForm = {
    submit() {

        Fname = document.getElementById("fname").value;

        Email = document.getElementById("Email").value;

        Birth = document.getElementById("date").value;

        Phone = document.getElementById("phone").value;

        Check = document.getElementById("notification").checked;

        console.log(Fname, "/", Email, "/", Birth, "/", Phone, "/", Check);

        if (Fname && Email && Birth && Phone !== "") {
            alert("Thanks!!");

        }

    }
}

//Slides show
const show = {
    slideIndex : 0,    

    showSlides() {
        let x  = show.slideIndex
        let content = document.getElementsByClassName("offer");
    
        for (let i = 0; i < content.length; i++) {
            content[i].style.display = "none";    
        }
        show.slideIndex++
        if (show.slideIndex > content.length) { show.slideIndex = 1 }
        content[show.slideIndex - 1].style.display = "block";
        setTimeout(show.showSlides, 4000);
    }
    
}
show.showSlides()

//favorite

const Wish = {

    description: null,

    favorite(clicked_id) {

        let white = document.getElementById(clicked_id);
        let product = document.getElementsByClassName(clicked_id);
        description = product.item(0).innerText;


        if (white.style.fill != "black") {
            white.style.fill = "black";
            Wish.addFavorite();

        }
        else {
            white.style.fill = "rgb(189, 186, 186)";
            Wish.removeItem(description);
        }        

    },

    addFavorite() {
        let x = description
        let ul = document.getElementById("list_fav");
        let li = document.createElement('li');
        li.setAttribute('id', x);
        li.setAttribute('onclick', 'Wish.removeItem(this.id)')
        li.appendChild(document.createTextNode(x));
        ul.appendChild(li); 

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


