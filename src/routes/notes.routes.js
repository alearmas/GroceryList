const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    editForm, 
    updateNote, 
    deleteNote 
} = require('../controllers/noteController')

// New note
router.get('/notes/add', renderNoteForm);
router.post('/notes/add', createNewNote);

// Getting all notes
router.get('/notes', renderNotes)

// Editing notes
router.get('/notes/edit/:id', editForm)
router.put('/notes/edit/:id', updateNote)

// Delete notes
router.delete('/notes/delete/:id', deleteNote)

module.exports = router;