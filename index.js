fetch("lists.json")
    .then(Response => Response.json)
    .then(data => {
        console.log(data)
    })

function randomRange(min, max) {
    return Math.round(min + (Math.random()*(max-min)))
}

function makeWord() {
    subject = json.subject[randomRange(0, json.subjects.length)]
    insult = json.insults[randomRange(0, json.insults.length)]
    word = function(s, i) {
        if (s.gender == "m") {
            ins = i.mWord
        } else if (s.gender = "f") {
            ins = i.fWord
        }
        sub = s.name
        if (i.type = 2) {
            order = randomRange(0, 1)
        } else {
            order = i.type
        }
        if (order == 0) {
            output = [ins, sub].join
        } else if (order == 1) {
            output = [sub, ins].join
        }
         
        return string(output)
    }
    return word
}

document.getElementById("1").onclick = function() {
    document.getElementById("2").innerText = makeWord()
}
