let friends = [
    'Hallie',
    'Isabel',
    'Julio',
    'Malcolm',
    'Justin'
]

friendsSing(friends);

// steps through array to sing the song for each friend.
function friendsSing(friends) {
    for (let i in friends) {
        console.log(friends[i].toUpperCase() + ":");
        singSong(friends[i]);
    }
}

function singSong(name) {
    let lines = 99;
    while (lines > 0) {
        if (lines === 1) {
            //checks for special case of last line.
            console.log(lines + " line of code in the file, " + lines + " line of code; " + name + " strikes one out, clears it all out, no more lines of code in the file!");
            lines--;
        } else if (lines === 2) {
            // checks for special case of second to last line.
            console.log(lines + " lines of code in the file, " + lines + " line of code; " + name + " strikes one out, clears it all out, one more line of code in the file.");
            lines--;
        } else {
            console.log(lines + " lines of code in the file, " + lines + " line of code; " + name + " strikes one out, clears it all out, " + (lines - 1) + " lines of code in the file.");
            lines--;
        }
    }
}