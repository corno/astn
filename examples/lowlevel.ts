import * as fs  from "fs"
import * as bc from "../src"

const [, , path] = process.argv

if (path === undefined) {
    console.error("missing path")
    process.exit(1)
}

const data = fs.readFileSync(path, {encoding: "utf-8"})

const parser = new bc.Parser({ allow: bc.lax})
parser.ondata.subscribe({
    onlinecomment: (_comment, _range) => {
        //place your code here
    },
    onblockcomment: (_comment, _range, _indent) => {
        //indent can be used to strip the leading whitespace of all lines of the block comment.
        //indent indicates the indentation string found up to the `/*` characters.
        //this is only provided if the block comment starts on a new line
    },
    onsimplevalue: (_value, _range) => {
        //place your code here
    },
    onopentaggedunion: _location => {
        //place your code here
    },
    onclosetaggedunion: () => {
        //place your code here
    },
    onoption: (_option, _range) => {
        //place your code here
    },
    onopenarray: (_startLocation, _openCharacter) => {
        //place your code here
    },
    onclosearray: (_endLocation, _closeCharacter) => {
        //place your code here
    },
    onopenobject: (_startLocation, _openCharacter) => {
        //place your code here
    },
    oncloseobject: (_endLocation, _closeCharacter) => {
        //place your code here
    },
    onkey: (_key, _range) => {
        //place your code here
    },
    onend: () => {
        //place your code here
    },
})
parser.onerror.subscribe(err => { console.error("FOUND ERROR", err.message) })
parser.write(data)
parser.end()
