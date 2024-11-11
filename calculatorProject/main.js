const val = document.getElementById("user-input");

const number =document.querySelectorAll(".numbers").forEach(function(item){
item.addEventListener("click", function(e){
    if(val.innerText === "NaN"){
        val.innerText = "";

    }
    if(inputValue.innerText === "0"){
        val.innerText="";
    }
    val.innerText += e.target.innerHTML.trim();
  });
});

const calculate =document.querySelectorAll(".operations").forEach(function(item){
        item.addEventListener("click", function(e){
        console.log(e.target.innerHTML);
  })
})