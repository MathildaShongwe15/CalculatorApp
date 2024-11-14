const val = document.getElementById("user-input");

const number =document.querySelectorAll(".numbers").forEach(function(item){
item.addEventListener("click", function(e){
    if(val.innerText === "NaN"){
        val.innerText = "";
    }
    if(val.innerText === "0"){
        val.innerText="";
    }
    val.innerText += e.target.innerHTML.trim();
  });
});

const calculate = document.querySelectorAll(".operations").forEach(function(item){
        item.addEventListener("click", function(e){
           // console.log(e.target.innerHTML);

     let lastVal =val.innerText.substring(val.innerText.length,val.innerText.length - 1);

            if(!isNaN(lastVal) && e.target.innerText === "="){
                val.innerText = eval(val.innerText);
            }
            else if (e.target.innerHTML === "AC") {
                val.innerText = 0;
            } else if (e.target.innerHTML === "DEL") {
                val.innerText = val.innerText.substring(0,val.innerText.length - 1);
                if (val.innerText.length == 0) {
                    val.innerText = 0;
                }
            }
            else{
                if (!isNaN(lastVal)) {
                    val.innerText += e.target.innerHTML;
                }
            }

        });
});

