function superbowlWin(record) {
    for (const win of record) {
        if (win.result === "W") {
            return win.year;
     }
    }
}
console.log(record.find(superbowlWin).year)