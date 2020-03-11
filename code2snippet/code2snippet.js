var fs = require("fs");

var vueFile = 'code2snippet.vue';
var snippetFile = 'code2snippet.snippet';
var data = fs.readFileSync(vueFile);
var str = toSnippet(data)

// 命名格式：aa_vue__file、aa_vue_props__js、aa_vue_props_object__js像这样分组和子片段
var result = `"aa_vue__file": {
"prefix": "aa_vue__file",
"body": [${str}
],
"description": "aa_vue__file"
},
`

fs.writeFile(snippetFile, result, 'utf8', function(err) {
  if (err) {
    console.log(err);
  }
});

function toSnippet(data) {
  var arr = data.toString().split('\n')
  arr.forEach((val, index) => {
    arr[index] = '\n' + JSON.stringify(arr[index].trim().replace(/\$/g, '\$\$\$'))
  })
  return arr.toString()
}
