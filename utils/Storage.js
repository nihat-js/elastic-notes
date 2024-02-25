// auto-save
export class Storage {
  // #note = ""

  _list = []

  async load() {
    try {
      this._list = await chrome.storage.local.get("list")
    } catch (e) {
      this._list = []
    }
  }

  async getList() {
    return this._list;
  }



  async unshift(el) {
    this._list.unshift(el)
    await this._saveToStorage()
  }

  async push(el) {
    console.log("pushing to", this._list, el);
    this._list.push(el)
    await this._saveToStorage()
  }


  async pop() {
    this._list.pop()
    await this._saveToStorage()
  }

  async _saveToStorage() {
    console.log("what is list", this._list)
    await chrome.storage.local.set({ list: this._list })
  }

  async clear() {
    await chrome.storage.local.set({ list: [] })
  }

}