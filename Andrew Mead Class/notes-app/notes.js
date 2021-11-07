const fs = require('fs')

const getNotes = (()=>{
    return `Your notes...`;
})

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicatesNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicatesNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log('New Note Added!')
    }else{
        console.log('Note Title already Taken!')
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notesToKeep.length !== notes.length){
        notes.push({
            title: notesToKeep.title,
            body: notesToKeep.body
        })
        saveNotes(notes)
        console.log('Note Removed')
    }else{
        console.log('This note does not exist')
    }
}



const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
