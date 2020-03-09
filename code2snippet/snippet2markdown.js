var fs = require("fs")
var path = require('path')
var fileList = []
var snippetList = []
var snippetFile = './../snippets.md';

init()

function init() {
  getFiles('./../', '.code-snippets')

  // console.log('fileList', fileList)
  fileList.forEach((file, index) => {
    if (file.match('vue-element-admin')) return
    var obj = getJson(file)
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

  // console.log('snippetList', JSON.stringify(snippetList))
  fs.writeFile(snippetFile, snippetList.join(' \n '), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
}

function getJson(filePath) {
  var data = fs.readFileSync(filePath);
  data = data.toString()
  data = data.replace(/\t\/\/.*?\n/g, '').replace(/\n/g, '').replace(/\t/g, '').trim()
  data = data.replace(/\"body\": \[.*?\"description\": \"/mg, '"description": "')
  data = JSON.parse(data)
  return data
}


// var fs = require("fs");

// var filePath = 'code2snippet.vue';
// var data = fs.readFileSync(vueFile);


function getFiles(url, ext) {
  try {
    var files = fs.readdirSync(url)
    files.forEach(function(file) {
      try {
        var stats = fs.statSync(url + file)
        if (stats.isFile()) {
          if (path.extname(url + file) === ext) {
            fileList.push(url + file)
            // console.log(path.basename(file, ext))
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
