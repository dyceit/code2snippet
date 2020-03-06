var fs = require("fs");

var vueFile = '/Users/dyce/futong/joinf-dbutils/frontend/.vscode/code2snippet/code2snippet.vue';
var snippetFile = '/Users/dyce/futong/joinf-dbutils/frontend/.vscode/code2snippet/code2snippet.snippet';
var data = fs.readFileSync(vueFile);
var str = toSnippet(data)

var result = `"aa_vue_template_script_style__file": {
"prefix": "aa_vue_template_script_style__file",
"body": [${str}
],
"description": ""
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
    arr[index] = '\n' + JSON.stringify(arr[index].trim().replace(/\$/g, '\$\$'))
  })
  return arr.toString()
}
