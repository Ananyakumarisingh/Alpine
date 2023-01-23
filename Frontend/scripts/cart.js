let cart_array = JSON.parse(localStorage.getItem("cartArray")) || [];
let main_section = document.querySelector("#main_section");
mainSection(cart_array);

function mainSection(array) {
  main_section.innerHTML = "";
  main_section.innerHTML = array.map((el, i) => {
      return `<div class="cart_img">
        <img src="${el.img}"
    </div>
    <div class="cart_img_bottom">
        <h2 class="product_title">"${el.title}"</h2>
        <p class="in_stock">In stock</p>
        <div>
        <p>₹</p>
        <p id="product_price">199000<p>
        </div>
        <p class="delivery">Free delivery</p>
        <div class="button_div_parent">
            <a href="./product.html"><button>Shop for more</button></a>
            <button class="remove_item" onClick=remove_data(${i})>Remove</button>
        </div>
    </div>`;
    }).join(" ");
}

function remove_data(index){
  cart_array.splice(index,1);
  localStorage.setItem("cartArray",JSON.stringify(cart_array));
  mainSection(cart_array);
}


