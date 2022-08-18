import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
bookmarks: Bookmark[]=[
  new Bookmark("updated"," ")
  
]
  constructor() { }
  getBookmarks() {
    return this.bookmarks
  }
  getBookmark(id: string) {
    return this.bookmarks.find(b=> b.id ===id)
  }
  addBookmark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark)
  }
  updateBookmark(id:string, updateFields: Partial<Bookmark>){
    const bookmark:any = this.getBookmark(id)
    Object.assign(bookmark, updateFields)
  }
  deleteBookmark(id:string) {
    const bookmarkIndex:any = this.bookmarks.findIndex(b=> b.id === id)
    if (bookmarkIndex == -1)return
    this.bookmarks.splice(bookmarkIndex, 1)
    
  }
}
