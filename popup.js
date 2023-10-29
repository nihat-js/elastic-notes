const textarea = document.querySelector("textarea")
textarea.focus()
document.getElementById("reset").onclick = async function () {
  await chrome.storage.local.set({ data: "" });
  textarea.value = ""
}

async function load() {
  console.log("loading...")
  let result = await chrome.storage.local.get("data")
  textarea.value = result.data
}

load()


textarea.onkeydown = debouncer(handleTyping,400)

async function handleTyping() {
  await chrome.storage.local.set({ data: textarea.value })
}

function debouncer(fn, delay) {
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