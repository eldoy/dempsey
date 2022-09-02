const { run, read, write } = require('extras')

const file = read('app/pages/index.js', 'utf8')
let newFile = file

// Find all the base64 strings
const reg = /"data:image\/jpg;base64,(.+)"/g
const matches = file.match(reg) || []

for (var i = 0; i < matches.length; i++) {
  const match = matches[i]
  const base64string = match.replace(reg, '$1')
  console.log(match)
  const filename = `/img/book/image${i + 1}.jpg`
  newFile = newFile.replace(match, `"${filename}"`)
  run(`echo "${base64string}" | base64 -d > app/assets${filename}`)
}

write('app/pages/result.js', newFile)
