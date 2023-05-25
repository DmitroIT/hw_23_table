const table = document.createElement('table')
table.style.border = '1px solid black'
table.style.width = '400px'
table.style.height = '400px'

let count = 1

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr')
    tr.style.border = '1px solid black'

    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td')
        td.style.border = '1px solid black'
        td.innerText = count++
        tr.append(td)
    }
    table.append(tr)
}
document.body.append(table)



