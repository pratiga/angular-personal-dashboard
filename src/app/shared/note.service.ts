import { Injectable } from '@angular/core';
import { Note } from './note.models';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

 notes: Note[]=[
  new Note('test title', 'test content !'),
  new Note('test title', 'test content !')
 ]
  constructor() { }
  getNotes(){
    return this.notes
  }
  
  getNote(id:string) {
    return this.notes.find(n =>n.id === id)
  }
  addNote(note: Note) {
    this.notes.push(note)
  }
  updateNote(id:string, updateFields: Partial<Note>) {
    const note:any = this.getNote(id)
    Object.assign(note, updateFields)
  }
  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex(n => n.id === id)
    if (noteIndex == -1)return
    this.notes.splice(noteIndex, 1)
  }
  
}
