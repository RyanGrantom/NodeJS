const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customize Yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ', argv.title)
    }
})

//create remove command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all of the notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note')
    }
})

//create delete command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

// add, remove, read, list

yargs.parse()