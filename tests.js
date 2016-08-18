'use strict'

var chai = require('chai');
var assert = chai.assert;

var NotesApplication = require('./lib/notesapplication.js');
var Note = require('./lib/notes.js');

describe("Note creation works properly", function() {
	var note;
	
	beforeEach( function(){
		note = new Note("ManMan bricks")
		
	});
    
	it("create a new note for an author based on the note content passed to the create function for the current author", 
	function() {
		
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")		
		assert(note.notes.length === 3 )		
	});
	
	it("assigns author based on the parameter supplied in the constructor", function() {
        assert(note.author == "ManMan bricks")
    });
	
	it("list all notes for an author using listNotes function", function() {
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")	
		assert( note.listNotes() === true )
	})
		
	it("Get an author's note by supplying the note id as parameter to get function", function() {
	
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")	
		console(note.get(1));
		assert( note.get(1) === "This is my second note" );
		assert( note.get(4) === false );
		asert( note.get("him") === false );
	})
	
    it("search the all notes of an Author by supplying the search term as parameter to the search function", function() {
		
		assert( note.search("Thisis") === "No search found for Thisis" );
		assert( note.search(156) === "Enter a search string" );
		
	})
	
    it("Delete an Author's note by supplying as parameter the note id", function() {
		
		var newNote = new Note( "David Beck" );
		newNote.create("First Note");
		newNote.create("second Note");
		newNote.create("third Note");
		newNote.deleteNote(0)
		assert( newNote.notes.length === 2 );
		newNote.deleteNote(0)
		assert( newNote.notes.length === 1 );
		assert( newNote.deleteNote(5.6) === false )
		
	})
	
	it("Edit an Author's note by supplying as parameter the note id and new content to the edit function", function() {
		
        note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")			
		assert( note.edit(5,"new note") === false );
		var newNote = "Change First Note";
		note.edit(0, newNote)
		assert( note.get(0) === newNote );
		assert( note.edit(5,5) === false );
		assert( note.edit("5","new note") === false );		
	}) 
})

describe("Notes application increments number of notes of an author as notes are added", function() {
	
	var noteApplication;
	
	beforeEach( function(){		
	
		noteApplication = new NotesApplication();		
	})
	
    it("increments the note list as notes are added", function() {
		var note = new Note("ManMan bricks")
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")
        noteApplication.addAuthorNote(note)
        assert(noteApplication.authornote.length == 1)
    })
	
	it("get note of a particular author by supplying author name(case sensitive) and note id", function() {
		var note = new Note("David Beckham")
		note.create("This is my first note")
		note.create("This is my second note")
		note.create("This is my third note")
		
		var note1 = new Note("David Beckham")
		note1.create("This is my first note")
		note1.create("This is my second note")
		note1.create("This is my third note")
		noteApplication.addAuthorNotes(note)
		noteApplication.addAuthorNote(note1);
        assert(noteApplication.getNote(note,0) === "This is my first note")
		assert(noteApplication.getNote(note,4) === false)
    })
	
	it("view all Authors note in the application", function() {
		
        assert( noteApplication.viewAllNotes() === "No created notes")
    })
})