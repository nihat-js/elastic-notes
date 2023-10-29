chrome.contextMenus.create({
  title: "Add item",
  id: "add",
  // show the menu over everything
  contexts: ["selection"]
  // IMPORTANT: because we are no longer using a
  // persistent background script we will need to
  // add an event listener outside contextMenus.create.
});
// chrome.contextMenus.create({
//   title: "Set Data",
//   id: "set",
//   // show the menu over everything
//   contexts: ["all"]
//   // IMPORTANT: because we are no longer using a
//   // persistent background script we will need to
//   // add an event listener outside contextMenus.create.
// });



// console.log(chrome.contextMenus)


// chrome.storage.local.set({ "phasersTo": "awesome" }, function(){
//   //  Data's been saved boys and girls, go on home
// });

// if (menu.menuItemID == "get"){
  // }

chrome.contextMenus.onClicked.addListener( async (item,tab) => {

  let result = await chrome.storage.local.get("data")
  // console.log("data",result.data)
  // console.log("item",item.selectionText)
  let data = result.data + "\n" + `* ${item.selectionText}`
  await chrome.storage.local.set({data})
  console.log("Data is saved",data)
})

