module.exports = (app) =>  {
    const notes = require('../controllers/note.controller.js');

    //create a new note
    app.post('/notes',notes.create);

    //Retrieve all notes
    app.get('/notes',notes.findAll);

    //single node with id
    app.get('/notes/noteId',notes.findOne);

    //UPDATE node with id
    app.put('notes/noteId',notes.update);

    //delete note with id
    app.delete('/notes/noteId',notes.delete);
}