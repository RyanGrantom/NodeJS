const fs = require('fs')
const chalk = require('chalk')

const getNotes = (()=>{
    return `Your notes...`;
})

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatesNotes = notes.filter((note) => note.title === title)

    if(duplicatesNotes.length === 0){
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

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse("Your Notes..."))
    notes.title.forEach((note) => console.log(note.title))
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

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote
}
