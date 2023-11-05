// auto-save
export class Storage {
  // #note = ""
  #list = []
    async getList(){
    try{
      this.#list = await chrome.storage.local.get("list")
    }catch(e){
      this.#list = []
    }
    return list
  }

  async  saveList(){
    await chrome.storage.local.set({list : JSON.stringify(list)})
  }

  async unshift(el){
    this.#list.unshift(el)
    await saveList()
  }
  

  async pop(){
    this.#list.pop()
    await saveList()
  }

  // async  get note(){}
  
}