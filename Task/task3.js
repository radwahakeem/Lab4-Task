function swapImages(){
    let get1 = document.getElementById("img1");
    let get2 = document.getElementById("img2");
    let get3 = document.getElementById("img3");
    let fetch = get1.src;
    get1.src = get2.src;
    get2.src = get3.src;
    get3.src = fetch;
   }