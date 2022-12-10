function fun() {
    
        var x = document.createElement("IMG");
        x.setAttribute("src", "C:/Users/elmohandes/Videos/Lab4/22.jpg");
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        x.setAttribute("alt", "The Pulpit Rock");
        document.body.appendChild(x);
        let numb = document.body.childNodes.length;
    alert(numb); 
    document.body.removeChild(x)
}

