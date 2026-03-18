const API = "http://localhost:5000/api/products";
let wishlist = [];

window.onload = () => {
  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },1200);
};

function showSection(section){
  document.getElementById("homeSection").style.display="none";
  document.getElementById("productsSection").style.display="none";
  document.getElementById("adminSection").style.display="none";
  document.getElementById("wishlistSection").style.display="none";

  document.getElementById(section+"Section").style.display="block";

  if(section==="products"){
    fetchProducts();
  }
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}

async function fetchProducts(){
  const res = await fetch(API);
  const products = await res.json();
  displayProducts(products);
}

function displayProducts(products){
  const list = document.getElementById("productList");
  list.innerHTML="";
  products.forEach(p=>{
    list.innerHTML+=`
      <div class="product">
        <img src="http://localhost:5000/${p.image}" />
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
      </div>
    `;
  });
}

document.getElementById("productForm").addEventListener("submit", async(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append("name", document.getElementById("name").value);
  formData.append("price", document.getElementById("price").value);
  formData.append("image", document.getElementById("image").files[0]);

  await fetch(API,{
    method:"POST",
    body:formData
  });

  alert("Product Added");
});