// Note class

module.exports = function Note(author) {
	
	    if(typeof(author) === 'string'){
			
		   this.author = author;
		   this.notes = [];
		}else{
		   
		   //display error message
		   console.log("author name must be a string");
		}
	
	    this.create = create;
		this.listNotes = listNotes;
		this.get = get;
		this.search = search;
		this.delete = delete;
		this.edit = edit;
	
}

//Creates Notes
	create(note_content){
		
		if(typeof(note_content) === 'string'){
			
		   this.notes.push(note_content);
		}else{
			//display error message
			console.log("Note content must be a string");
		}
	}

//listing notes
	listNotes(){
		
		var list = "";
		
		for( var i = 0; i < this.notes.length; i++ ){
			
			list += "Note ID: " + i + "\n";
			list += this.notes[i] + "\n\n";
			list += "By Author " + this.author + "\n\n";
		}
		
		if(list === "")
		    console.log("You have not added a note yet");
		else
		    console.log(list);
	}

	//Get note by note_id
	get(note_id){
		
		if(typeof(note_id) === "number"){
			
			if(parseInt(note_id) === note_id)
				return this.notes[note_id];
			else
				console.log("note id must be an integer");
		}else{
				console.log("note_id must be an integer");
		}
	}
	
	//Search note collection
	search(search_text){
		
		if(typeof(search_text) === "string"){
			
		    var list = "Showing results for search ‘" + search_text + "’" + "\n\n";
		    var resultEmpty = true;
		    
			for( var i = 0; i < this.notes.length; i++ ){
			
				if(this.notes[i].includes(search_text)){
				
		    			list += "Note ID: " + i + "\n";
				    	list += this.notes[i] + "\n\n";
			    		list += "By Author " + this.author + "\n\n";
			    		resultEmpty = false;
			     }
			}
			
			if(resultEmpty)
				return "No search found for " + search_text;
			else
				return list;
				
		}else{
			return "Enter a search string";
		}
	}
	
	//Delete note
	delete(note_id){
		
			if(typeof(note_id) === "number"){
			
				if(parseInt(note_id) === note_id)
		        		this.notes.pop(note_id);
		    		else
				    console.log("note id must be an integer");
		     }else{
			        console.log("note_id must be an integer");
		      }
	}
	
	//Editing note
	edit(note_id, new_content){
		
		if(typeof(note_id) === "number" && typeof(new_content) === "string"){
			
				if(parseInt(note_id) === note_id)
		        		this.notes[note_id] = new_content;
		        	else
				    	console.log("note id must be an integer");
		     }else{
				console.log("note id must be an integer and note content must be a string");
		      }
     }
    