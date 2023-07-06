import json from './lists.json' assert {type: 'json'}

console.log(json)

function random(n1, n2) {
    let output = Math.floor(n1 + (Math.random() * (n2-(n1-1))))
    return output
}

console.log(json.subjects[random(0, json.subjects.length -1)])

let makeWord = function() {
    let iS = random(0, json.subjects.length -1)
    let iI = random(0, json.insults.length -1)
    let s = json.subjects[iS]
    let i = json.insults[iI]

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
        console.log([order, json.insults[1].type, i, iI])
        if (order == 0) {
            output = [ins, sub].join(' ')
        } else if (order == 1) {
            output = [sub, ins].join(' ')
        }
         
        return String(output)
}



document.getElementById("1").onclick = function() {
    document.getElementById("2").innerText = makeWord()
}
