import { Storage } from "./utils/Storage.js"
chrome.contextMenus.create({
  title: "Add to list",
  id: "add",
  contexts: ["selection"]
  // IMPORTANT: because we are no longer using a
  // persistent background script we will need to
  // add an event listener outside contextMenus.create.
});


chrome.contextMenus.onClicked.addListener(async (item, tab) => {

  chrome.storage.local.get(['list'], function (result) {
    console.log('Value currently is ' + result.list);
    let data = Array.isArray(result.list) ? result.list : []
    data.push(item.selectionText)

    chrome.storage.local.set({ list: data }, function () {
      console.log('Value is set to ' + data);
    });

  });

  // const storage =  new Storage()
  // await storage.load()
  // await storage.push(item.selectionText)
  // console.log("clicked", storage,item.selectionText)
  // console.log(await storage.getList()) 
})

chrome.commands.onCommand.addListener(function(command) {
  if (command === "invokeFunction") {
      // Call your function here
      chrome.storage.local.get(['list'], function (result) {
        console.log('Value currently is ' + result.list);
        let data = Array.isArray(result.list) ? result.list : []
        data.push(item.selectionText)
    
        chrome.storage.local.set({ list: data }, function () {
          console.log('Value is set to ' + data);
        });
    
      });
  }
});

