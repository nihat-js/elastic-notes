chrome.contextMenus.create({
  title: "Add to list",
  id: "add",
  contexts: ["selection"]
  // IMPORTANT: because we are no longer using a
  // persistent background script we will need to
  // add an event listener outside contextMenus.create.
});



let list = []

async function getList(){
  try{
    data = await chrome.storage.local.get("list")
  }
  return data
}
async function saveList(){
  await chrome.storage.local.set({list : JSON.stringify(list)})
}

chrome.contextMenus.onClicked.addListener( async (item,tab) => {

  let arr = await getList();
  arr.unshift(selectionText)
  await saveList(arr)

  // let data = result.data + "\n" + `* ${item.selectionText}`
  // console.log("Data is saved",data)
})


