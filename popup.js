import { debouncer, renderMenu } from "./utils/helpers.js?v=1.1"
import { Storage } from "./utils/Storage.js?v1.1"

const textarea = document.querySelector("textarea")
const resetBtn = document.getElementById('btn-reset')
const removeItemBtn = document.getElementById('btn-remove')
const addItemBtn = document.getElementById('btn-add')

let activeTab = 'list'



reset.onclick = async function () {
  await chrome.storage.local.set({ list: "" });
  textarea.value = ""
}


document.querySelectorAll(".menu-tab").forEach(item => {
  item.onclick = () => {
    activeTab = item.dataset.tab
    console.log(activeTab)
    renderMenu(activeTab)
  }
});



chrome.storage.local.get(['list'], function (result) {
  console.log('Value currently is ' + result.list);
  let data = Array.isArray(result.list) ? result.list : []
  textarea.value = data.join("\n")
});


textarea.onkeydown = debouncer(async () => {
  await chrome.storage.local.set({ list: textarea.value.split("\n") })
}, 400)



