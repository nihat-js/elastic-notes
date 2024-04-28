import { debouncer, renderMenu } from "./utils/helpers.js?v=1.1"
import { Storage } from "./utils/Storage.js?v1.1"

const textarea = document.querySelector("textarea")
const resetBtn = document.getElementById('btn-reset')
const removeItemBtn = document.getElementById('btn-remove')
const addItemBtn = document.getElementById('btn-add')

let activeTab = 'list'
let data



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


// console.log("line28");
chrome.storage.local.get(['list'], function (result) {
  console.log('Value currently is ' + result.list);
  data = Array.isArray(result.list) ? result.list : []

  let html = data.map(item => {
    return `<div class="item">
                <span class="item-text">  ${item.substring(0, 25)}${item.length > 25 && "..."} </span>
                <div class="item-actions">
                  <button type="button" class="copy-button"> Copy </button>
                  <button type="button" class="delete-button" Delete </button>
                </div>
              </div>`
  })
  document.querySelector(".items").innerHTML = html
  textarea.value = data.join("\n")
});

document.querySelector(".copy-all").onclick = () => {
  copyToClipboard(text)
}

function copyToClipboard(text) {
  // Use the Clipboard API to write text to the clipboard
  navigator.clipboard.writeText(text)
  // .then(() => {
  // console.log('Successfully copied to clipboard.');
  // alert(`Copied to clipboard: ${text}`); // Optional user feedback
  // })
  // .catch(err => {
  // console.error('Failed to copy to clipboard:', err);
  // });
}



// textarea.onkeydown = debouncer(async () => {
//   await chrome.storage.local.set({ list: textarea.value.split("\n") })
// }, 400)





