export class NoteDAO{
    id: Number;
    title: String;
    content: String;

    constructor(t: String, c: String){
        this.title = t;
        this.content = c;
        this.id = NoteDAO.getId();
    }

    /**
     * Returns an unused id for a new note.
     * @internal
     * 
     * @remarks
     * If there is no existing counter, one is put into storage.
     * Counter starts at 1.
     * 
     * @returns The next sequential id number in storage 
     */

     public static getId() : Number{
        let nextId = localStorage.getItem("counter");
        if(nextId == null){
            localStorage.setItem("counter", "2");
            return 1;
        }else{
            localStorage.setItem("counter", "" + (parseInt(nextId) + 1));
            return parseInt(nextId);
        }
    }

    /**
     * Returns all the notes that are in storage.
     * 
     * @remarks
     * There is a separate array that keeps track of all notes that exist in storage.
     * Notes themselves are stored individually in storage with their ids as the keys.
     * 
     * @returns The list of all notes in storage
     */
    public static getNotes(): NoteDAO[] {
        const ids = localStorage.getItem("ids");
        if(ids){
            let list:NoteDAO[] = [];
            let idList = JSON.parse(ids);
            for(let id of idList){
                const note = localStorage.getItem(id);
                if(note){
                    list.push(JSON.parse(note));
                }
            }
            return list;
        }else{
            return [];
        }
    }

    /**
     * Adds a new note to the storage, and puts its id into the ids array.
     * 
     * @param title - The title of the note
     * @param content - The content of the note
     * @returns The id of the newly created note
     */
    public static createNote(title: String,content: String) : Number {
        let newNote = new NoteDAO(title, content);
        localStorage.setItem(""+newNote.id, JSON.stringify(newNote));
        let ids = localStorage.getItem("ids");
        if(ids){
            let idList = JSON.parse(ids);
            idList.push(newNote.id);
            localStorage.setItem("ids", JSON.stringify(idList));
        }else{
            const newIdList = [newNote.id];
            localStorage.setItem("ids", JSON.stringify(newIdList));
        }
        return newNote.id;
    }

    /**
     * Overwrites the existing note in storage with new information.
     * 
     * @param note The note to be updated in storage
     * @returns Whether the update succeeded
     */
    public static updateNote(note: NoteDAO) : boolean{
        // necessary to check if the id exists? 
        localStorage.setItem(""+note.id, JSON.stringify(note));
        return true;
    }

    /**
     * Removes the note with the given id from storage.
     * The id is also removed from the ids array.
     * 
     * @param id The id of the note to be removed
     * @returns Whether the deletion was a success
     */
    public static deleteNoteById(id: Number): boolean{
        let ids = localStorage.getItem("ids");
        if(ids){
            let idList = JSON.parse(ids);
            idList = idList.filter((i: Number)=>i!=id);
            localStorage.setItem("ids", JSON.stringify(idList));
            localStorage.removeItem(""+id);
            return true;
        }
        return false;
    }
}
