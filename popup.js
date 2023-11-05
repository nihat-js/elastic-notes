import {debouncer,renderMenu} from "./utils/helpers.js?v=1.1"
import {Storage} from "./utils/Storage.js?v1.1"

const textarea = document.querySelector("textarea")
// const resetBtn = document.getElementById('btn-reset')
// const removeItemBtn = document.getElementById('btn-remove')
// const addItemBtn = document.getElementById('btn-add')

let activeTab = 'list'



// reset.onclick = async function () {
//   await chrome.storage.local.set({ data: "" });
//   textarea.value = ""
// }

const storage = new Storage()

document.querySelectorAll(".menu-tab").forEach(item => {
  item.onclick = () => {
    activeTab = item.dataset.tab 
    console.log(activeTab)
    renderMenu(activeTab)
  }
});




async function load() {
  console.log("loading...")
  let result = await  chrome.storage.local.get("data") || ""
  textarea.value = result.data
}

// load()


textarea.onkeydown = debouncer(handleTyping,400)

async function handleTyping() {
  await chrome.storage.local.set({ data: textarea.value })
}


