const upper = str => {
    str.split(" ").map(v => v[0].toUpperCase()+v.slice(1)).join(" ")
}