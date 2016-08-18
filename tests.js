'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/note.js');

describe("Note creation works properly", function() {
    it("assigns author based on the parameter supplied in the constructor", function() {
        note = new Note("ManMan bricks")
        assert(note.author == "ManMan bricks")
    })
	
	it("create a new note for an author based on the note content passed to the create function for the current author", 
	function() {
		note = new Note("ManMan bricks")
		note.create("This is my first note")
		assert( note.get(0) == "This is my first note" )
	})
	
	it("list all notes for an author using listNotes function", function() {
		note = new Note("ManMan bricks")
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")
		list = note.listNotes();
		assert( list == "undefined" )
	})
		
	it("list all notes for an author using listNotes function", function() {
		note = new Note("ManMan bricks")
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")
		list = note.listNotes();
		assert( list == "undefined" )
	})
})

describe("Notes application increments number of notes as notes are added", function() {
    it("increments the note list as notes are added", function() {
        note = new Note("Hello world", "Chidiebere");
        noteapp = new NotesApplication("Chidiebere");
        assert(noteapp.notelist.length == 0)
        noteapp.addNote(note)
        assert(noteapp.notelist.length == 1)
    })
})