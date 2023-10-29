// document.getElementById('clickMe').addEventListener('click',  function () {
//   // alert('Button Clicked!');
// });


document.getElementById("reset").onclick=  async function(){
  await chrome.storage.local.set({data : ""});
  alert("Deleted everything");
}

async function get() {
  console.log("started")
  let result = await chrome.storage.local.get("data")
  document.querySelector("textarea").value = result.data
  // alert("finished",result.data)
}

get()