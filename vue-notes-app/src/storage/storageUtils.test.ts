import { createNote } from "./storageUtils";
test("create a note", () =>{
    const setItem = jest.spyOn(Storage.prototype, 'setItem')
    createNote("hello title","contentwow");
    expect(setItem).toHaveBeenCalledWith(expect.any(Number), {id:expect.any(Number), title:"hello title", content:"contentwow"});
})
