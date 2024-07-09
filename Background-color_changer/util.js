const button = document.querySelectorAll(".change-color");

button.forEach((item)=>{
    item.addEventListener('click',()=>{
        const change = document.querySelector("body");
        change.style.backgroundColor = 'red';
    })
})