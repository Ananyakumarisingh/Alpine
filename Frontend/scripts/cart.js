let cart_array = JSON.parse(localStorage.getItem("cartArray"))||[];
let main_section = document.querySelector("#main_section");
main_section.innerHTML = cart_array
  .map((el) => {
    return `<div class="cart_img"><img src="${el.img}"</div>
    <div class="cart_img">
        <h2 class="product_title">"${el.title}"</h2>
        <p class="in_stock">In stock</p>
        <div>
        <p>₹</p>
        <p id="product_price">199000<p>
        </div>
        <p class="delivery">Free delivery</p>
        <div class="button_div_parent">
            <a href="./product.html"><button>Shop for more</button></a>
            <button class="remove_item">Remove</button>
        </div>
    </div>`;
  })
  .join(" ");

