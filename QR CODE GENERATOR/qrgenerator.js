let qrtxt = document.getElementById("qrtxt");
   let imgbox = document.getElementById("imgbox");
   let imggen = document.getElementById("imggen");

   function togenerateQR() {
    if(qrtxt.value == ""){
        alert("Enter something to generate");
    }
    imggen.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.value;
    imgbox.style.maxHeight = "200px";
   }