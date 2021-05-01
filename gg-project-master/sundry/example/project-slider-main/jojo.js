let block = document.querySelectorAll('.container');
let dots = document.querySelectorAll('.slider-dots_item');

let index = 0;


setInterval(()=>{
    console.log(index);
    console.log(block.length);
    jojo(index);
    index++;
    if(index >= block.length){
        index = 0;
    }
}, 1000);


function jojo(index) {
    if(index >= block.length){
        index = 0;
    }
    for (let i = 0; i < block.length; i++) {
        if(i != index){
            block[i].classList.add('hidden');
            block[i].classList.remove('active');
        }else{
            block[i].classList.remove('hidden');
            block[i].classList.add('active');
        }
    }
}



function plusSlide() {
    console.log(some);

}

function minusSlide() {
    jojo(--index);
}

let left=document.querySelector('.left')
let right=document.querySelector('.right')
left.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(index);
    jojo(index+=1)
})