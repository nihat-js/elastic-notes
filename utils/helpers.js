export function debouncer(fn, delay) {
  let timerId
  return async function () {
    if (timerId) {
      clearInterval(timerId)
    }
    timerId = setInterval(() => {
      fn()
    }, delay)
  }
}


export function renderMenu(activeTab){
  document.querySelectorAll(".menu-tab").forEach((item,i)=>{
    if (item.dataset.tab === activeTab ){
      item.classList.add('active')
    }else{
      item.classList.remove('active')
    }
  })
}

export function renderContent(){
  // const textarea = document.querySelector('.menu textarea')
  // const menu = document.querySelector('.menu-content list')
  // const timer  = document.querySelector('.menu-content timers')
  document.querySelector("")
}