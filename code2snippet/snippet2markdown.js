var fs = require("fs")
var path = require('path')
var fileList = []
var snippetList = []
var snippetFile = './../snippets.md';

init()

function init() {
  getFiles('./../', '.code-snippets')

  fileList.forEach((file, index) => {
    if (file.match('vue-element-admin')) return
    var obj = getMap(file)
    Object.keys(obj).forEach((key, index) => {
      if (index === 0) {
        snippetList.push("\n## " + obj[key].description + "\n")
        snippetList.push(obj[key].prefix + "\n")
        snippetList.push("片段 | 描述")
        snippetList.push("---|---")
      } else {
        snippetList.push(obj[key].prefix + ' | ' + obj[key].description)
      }
    })
  })

  fs.writeFile(snippetFile, snippetList.join(' \n '), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
}

function getMap(filePath) {
  var txt = fs.readFileSync(filePath);
  txt = txt.toString()
  txt = txt.replace(/\t\/\/.*?\n/g, '').replace(/\n/g, '').replace(/\t/g, '').trim()
  txt = txt || '{}'
  return JSON.parse(txt)
}

function getFiles(url, ext) {
  try {
    var files = fs.readdirSync(url)
    files.forEach(function(file) {
      try {
        var stats = fs.statSync(url + file)
        if (stats.isFile()) {
          if (path.extname(url + file) === ext) {
            fileList.push(url + file)
          }
        } else if (stats.isDirectory()) {
          getFiles(url + file + '/', ext)
        }
      } catch (error) {
        return console.error(error);
      }
    })
  } catch (error) {
    return console.error(error);
  }
}
