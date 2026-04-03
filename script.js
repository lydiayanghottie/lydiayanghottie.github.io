let pages = document.querySelectorAll(".page");
let current = 0;

function nextPage(){
  if(current < pages.length){
    pages[current].classList.add("flipped");
    current++;
  }
}

function prevPage(){
  if(current > 0){
    current--;
    pages[current].classList.remove("flipped");
  }
}

/* 点击左右 */
document.body.addEventListener("click", e=>{
  if(e.clientX < window.innerWidth/2){
    prevPage();
  } else {
    nextPage();
  }
});

/* 标签跳转 */
document.querySelectorAll(".tabs div").forEach(tab=>{
  tab.addEventListener("click", ()=>{
    let target = tab.dataset.page;

    pages.forEach((p,i)=>{
      if(i < target){
        p.classList.add("flipped");
      }else{
        p.classList.remove("flipped");
      }
    });

    current = target;
  });
});
