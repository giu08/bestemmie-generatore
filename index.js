import json from './lists.json' assert {type: 'json'}

console.log(json)

let object = json

function random(n1, n2) {
    let output = Math.floor(n1 + (Math.random() * (n2-(n1-1))))
    return output
}

let makeWord = function() {
    let iS = random(0, object.subjects.length -1)
    let iI = random(0, object.insults.length -1)
    let s = object.subjects[iS]
    let i = object.insults[iI]
    let ins = null
    let order = null
    let output = null

    if (s.gender == "m") {
        ins = i.mWord
    } else if (s.gender = "f") {
        ins = i.fWord
    }
    let sub = s.name
    
    if (i.type == 2) {
        order = random(0, 1)
    } else {
        order = i.type
    }
    switch (order) {
        case 0:
            output = [ins, sub].join(' ')
            break;
        case 1:
            output = [sub, ins].join(' ')
            break;
        case 3:
            if (ins.includes("<sub>")) {
                output = ins.replace('<sub>', sub)
            } else {
                output = ins
            }
            break;
    }
    
    
    return String(output)
}



document.getElementById("1").onclick = function() {
    let end = makeWord()
    document.getElementById("2").innerText = end
    console.log(end)
}
