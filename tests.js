'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {
	
	beforeEach( function(){
		
		note = new Note("ManMan bricks")
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")
	})
    it("assigns author based on the parameter supplied in the constructor", function() {
        
        assert(note.author == "ManMan bricks")
    })
	
	it("create a new note for an author based on the note content passed to the create function for the current author", 
	function() {
		
		assert( note.get(0) == "This is my first note" )
	})
	
	it("list all notes for an author using listNotes function", function() {
		
		list = note.listNotes();
		assert( list == "undefined" )
	})
		
	it("Get an author's note by supplying the note id as parameter to get function", function() {
			
		assert( note.get(1) === "This is my second note" );
		assert( note.get(4) === "undefined" );
		asert( note.get("him") === "undefined" );
	})
	
    it("search the all notes of an Author by supplying the search term as parameter to the search function", function() {
		
		assert( note.search("Thisis") === "No search found for Thisis" );
		assert( note.search(156) === "Enter a search string" );
		
	})
	
    it("Delete an Author's note by supplying as parameter the note id", function() {
		
		newNote = new Note( "David Beck" );
		newNote.create("First Note");
		newNote.create("second Note");
		newNote.create("third Note");
		newNote.delete(0)
		assert( newNote.notes.length === 2 );
		newNote.delete(0)
		assert( newNote.notes.length === 1 );
		assert( newNote.delete(5.6) === "undefined" )
		
	})
	
	it("Edit an Author's note by supplying as parameter the note id and new content to the edit function", function() {
				
		assert( note.edit(5,"new note") === "undefined" );
		newNote = "Change First Note";
		note.edit(0, newNote)
		assert( note.get(0) === newNote );
		assert( note.edit(5,5) === "undefined" );
		assert( note.edit("5","new note") === "undefined" );		
	})
})

describe("Notes application increments number of notes of an author as notes are added", function() {
	
	beforeEach( function(){		
	
		noteApplication = new NotesApplication();		
	})
	
    it("increments the note list as notes are added", function() {
		note = new Note("ManMan bricks")
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")
        noteApplication.addAuthorNote(note)
        assert(noteApplication.authornote.length == 1)
    })
})