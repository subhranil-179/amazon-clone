
// It was a fucking nightmare don't ask me anything about it

let ul_class = document.querySelector('.carousel-item-holder');

let l_items = Array.from(ul_class.children);
l_items[0].classList.add('active-image')

let image_width = l_items[0].getBoundingClientRect().width;

var initial_x = 0;
var final_x = 0;

function setll(val){
    for(let i=0; i < l_items.length; i++){
        
        if(l_items[i].className.includes('active-image')){
            if(i+val == -1){
                l_items[i].classList.remove('active-image');
                l_items[l_items.length-1].classList.add('active-image');
                break
            }
            else if(i+val == l_items.length){
                l_items[i].classList.remove('active-image');
                l_items[0].classList.add('active-image');
                break
            }
            else{
                l_items[i].classList.remove('active-image');
                l_items[i+val].classList.add('active-image');
                break;
            }
        }

    }
};

ul_class.addEventListener('touchstart', e=>{
    [...e.changedTouches].forEach(touch => {
        initial_x = touch.pageX;
    })
})

ul_class.addEventListener('touchend', e=>{
    ;[...e.changedTouches].forEach(touch => {
        final_x = touch.pageX;
    })
    if(initial_x<final_x){
        ul_class.style.backgroundColor = 'red';
        let value = -1;
        setll(value);
    }
    else if(initial_x>final_x){
        ul_class.style.backgroundColor = 'green';
        let value = 1;
        setll(value);
    }
    else{
        ul_class.style.backgroundColor = 'blue';
    }
})

