
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

    index: 1,

    plusSlides(n) {
        slide.showSlides(slide.index += n)
    },

    current(n) {
        slide.showSlides(slide.index = n)
    },

    showSlides(n) {
        var i;
        let slides = document.getElementsByClassName("images_slide");
        if (n > slides.length) { slide.index = 1 }
        if (n < 1) { slide.index = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slide.index - 1].style.display = "block"

    }
}

slide.showSlides(slide.index)

//add to cart
const Cart = {
    description: null,

    product(clicked_id) {

        let list = document.getElementById(clicked_id) ;
        let product = document.getElementsByClassName(clicked_id);
        myCart = product.item(0).innerText;
        console.log(list.innerHTML)

        if (list.innerHTML == "Add to cart") {

            list.innerHTML = "Remove to cart";
            console.log(list.innerHTML)
            Cart.addproduct();            
        }
        else
        {
            list.innerHTML = "Add to cart";

            Cart.removeItem(myCart);
        }




    },

    addproduct() {
        let x = myCart
        let ul = document.getElementById("list");
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