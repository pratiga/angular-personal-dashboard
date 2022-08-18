import {v4 as uuidv4} from 'uuid'

export class Bookmark {
  splice(bookmarkIndex: void, arg1: number) {
    throw new Error('Method not implemented.')
  }
  findIndex(arg0: (b: any) => boolean) {
    throw new Error('Method not implemented.')
  }
  push(bookmarks: Bookmark) {
    throw new Error('Method not implemented.')
  }
  find(arg0: (b: any) => boolean) {
    throw new Error('Method not implemented.')
  }
  id: any
  name: string
  url:URL
  
  constructor(name: string, url: string){
    this.id = uuidv4()
    this.url = new URL(url)
    this.name = name
    
  }
  
}