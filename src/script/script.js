const categoryBtn = document.querySelectorAll(".category-btn");
const footerBtn = document.querySelectorAll(".footer-item");
const priceFilter = document.querySelector("#price-filter-value");
const priceValue = document.querySelector(".price-value");
const filterBtn = document.querySelector("#filter-btn");
const filterBox = document.querySelector(".filter");
const filterIcon = document.querySelector(".filter-icon");


categoryBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        
        categoryBtn.forEach((btn)=>{
            
            btn.classList.remove("active");
        })
        btn.classList.add("active");        
    })
})

footerBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        
        footerBtn.forEach((btn)=>{
            
            btn.classList.remove("active");
        })
        btn.classList.add("active");        
    })
})

priceFilter.addEventListener("input", ()=>{
    priceValue.textContent= priceFilter.value+"تومان";
})


filterBtn.addEventListener("click", ()=>{
    if (filterBox.classList.contains("hidden")) {
        filterBox.classList.replace("hidden","grid")
        filterIcon.classList.replace("fa-sliders","fa-times")
    }else {
        filterBox.classList.replace("grid","hidden")
        filterIcon.classList.replace("fa-times","fa-sliders")
    }
})
