const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)
        console.log(chalk.bgGreen.black('New Note Added!'))
    }else{
        console.log(chalk.bgRed.black('Note Title already Taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
    
    if(notesToKeep.length == notes.length){
        console.log(chalk.bgRed('No Note Found!'))
    }else{
        console.log(chalk.bgGreen.black('Note Removed!'))
        saveNotes(notesToKeep)
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes..."))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}

const readNotes = (title) => {
    try{
        const notes = loadNotes()
        const noteToRead = notes.find((note)=> note.title === title)
        console.log(chalk.inverse(noteToRead.title))
        console.log(noteToRead.body)

    }catch(e){
        return console.log(chalk.bgRed("This Note was not found"))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
