const fs = require('fs') // 文件操作
const readline = require('readline') // 读取命令行输入
const clipboardy = require('clipboardy') // 剪切板
const args = process.argv // node 参数
const colors = require('colors') // 命令行颜色

const vueFile = 'code2snippet.vue'
const snippetFile = '../aa.test.code-snippets'

let snippetOld = fs.readFileSync(snippetFile)
snippetOld = JSON.parse(snippetOld)

var content = ''
if (args[2] === '--clip') {
  content = clipboardy.readSync()
} else {
  var data = fs.readFileSync(vueFile)
  content = toSnippet(data)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
})

const preHint = `
生成的片段将直接与${snippetFile}文件合并
带参数：--clip，则使用剪切板中的内容来生成片段
不带参：则使用code2snippet.vue文件的内容来生成片段
`.grey

console.log(preHint)

// 问题
let questions = ['prefix', 'body', 'description']

// 默认答案
let defaultAnswers = ['aa_test_snippet__js', content, '']

// 用户答案
let answers = []
let index = 0

function createPackageJson() {
  var map = {}
  questions.forEach(function(question, index) {
    if (question === 'body') {
      map[question] = answers[index].split('\n')
    } else {
      map[question] = answers[index]
    }
  })
  map.description = map.description || map.prefix
  var ret = {}
  ret[answers[0]] = map

  ret = Object.assign(snippetOld, ret)

  fs.writeFileSync(snippetFile, JSON.stringify(ret, null, 2))
  console.log(`
代码片段生成成功
`.green)
}

function runQuestionLoop() {

  if (index === questions.length) {
    createPackageJson()
    rl.close()
    return
  }

  let defaultAnswer = index === questions.length - 1 ? defaultAnswers[0] : defaultAnswers[index]
  let question = questions[index] + ': (' + defaultAnswer + ') '

  rl.question(question, function(answer) {
    answers.push(answer || defaultAnswer)
    index++
    runQuestionLoop()
  })
}

// 代码转成片段，清除空格，转化$
function toSnippet(data) {
  var arr = data.toString().split('\n')
  arr.forEach((val, index) => {
    arr[index] = arr[index].trim().replace(/\$/g, '\$\$\$')
  })
  return arr.toString()
}

runQuestionLoop()
