var images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];
var id;
const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;


var nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',function(){

        const imageTag = document.getElementById('my-img');
        currentImage++; 
        if(currentImage >= lastImage){
            currentImage = 5;
        }
        imageTag.src = images[currentImage];
        document.getElementById('demo').innerHTML = (currentImage +1) + '/6';

});


var preBtn = document.getElementById('prev');
preBtn.addEventListener('click', function(){

    const imageTag = document.getElementById('my-img');
    currentImage--; 
    if(currentImage <= firstImage){
        currentImage = 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('demo').innerHTML = (currentImage +1) + '/6';

});


function  slidshow()
{
     id=setInterval(function()
{
    var i=Math.floor( Math.random()*images.length);
    var img=document.getElementById("my-img");
    img.src=images[i];
    i++;
    if(i>images.length-1)
    {
        i=0;
    }
},1000)
}

function stop()
 {
     clearInterval(id);
 }

