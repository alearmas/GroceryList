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

const { isAuthenticated } = require('../helpers/auth')

// New note
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/add', isAuthenticated, createNewNote);

// Getting all notes
router.get('/notes', isAuthenticated, renderNotes)

// Editing notes
router.get('/notes/edit/:id', isAuthenticated, editForm)
router.put('/notes/edit/:id', isAuthenticated, updateNote)

// Delete notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)

module.exports = router;