const { notStrictEqual } = require("assert");

const getNotes = (()=>{
    return `Your notes...`;
})

const getFramework = (()=>{
    return `Your Framework is not here...`;
})

module.exports.getNotes = getNotes;
module.exports.getFramework = getFramework;