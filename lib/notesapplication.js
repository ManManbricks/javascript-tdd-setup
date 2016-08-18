// NotesApplication class
var Note = require('./lib/notes.js');
module.exports = function NotesApplication() {
        
		this.authornote = {};
		this.getNote = getNote;
		this.addAuthorNotes = addAuthorNotes;
		this.viewAllAuthorNotes = viewAllAuthorNotes;
		
		
}
 
    function getNote(notes, note_id){
    	
    		if(notes instanceof Note){
    	        
    	        	if(typeof(note_id) === "number"){
			
				if(parseInt(note_id) === note_id){
					
				 	return this.authornote[notes.author].get(note_id);
				}else{
					console.log("note id must be an integer");
					return false;
				}
    	        	}else{
    	        		console.log("note id must be an integer");
						return false;
    	        	}
    		}else{
    			
    			console.log("Invalid type parameter");
				return false;
    		}
    }
    
    function addAuthorNotes(new_note){
    	
    	if(new_note instanceof Note){
    	
    		var author = this.authornote[new_note.author];
    	
    		if(author !== null && author !== undefined){
    			
           		console.log("Duplicate Author creation.");
				return false;
    		}
    		else
    	  		this.authornote[new_note.author] = new_note;
    	}else{
    		
    		console.log("Invalid note parameter");
			return false;
    	}
    }
    
    function viewAllAuthorNotes(){
    	
		 
         if(Object.keys(this.authornote).length < 1){
         	
         	return "No created notes";
         }
         
    	for( var i in this.authornote ){
    		var myNote = this.authornote[i];
        	myNote.listNotes()
    	}
		return true;
    }
    
    
