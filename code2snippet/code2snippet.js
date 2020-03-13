const fs = require('fs') // 文件操作
const inquirer = require('inquirer')
const path = require('path')
const shell = require('shelljs') // Node colorful always
const colors = require('colors') // 命令行颜色
const clipboardy = require('clipboardy') // 剪切板
const args = process.argv // node 参数

// 配置
const root = '../'
const defaultFile = '../aa.test.code-snippets' // 默认生成的片段文件
let resultFile = 'aa.test.code-snippets'
let codeFile = 'code2snippet.vue'

var content = ''
var resultMap = {}
var fileList = []

console.log(`
生成的片段将直接与${resultFile}文件合并
带参数：--clip，则使用剪切板中的内容来生成片段
不带参：则使用code2snippet.vue文件的内容来生成片段
`.grey)

getFiles(root, '.code-snippets')
fileList = fileList.filter(file => !file.match('vue-element-admin'))
const questions = [
  {
    name: 'result',
    type: 'rawlist',
    pageSize: 100,
    default: defaultFile,
    message: '请选择片段输出文件',
    choices: fileList
  },
  {
    name: 'prefix',
    type: 'input',
    default: 'aa_test_snippet__js',
    message: '请输入片段名称',
    validate (val) {
      if (!val) {
        return '名称不能为空'
      }
      return true
    }
  },
  {
    name: 'body',
    type: 'rawlist',
    default: 'clip',
    message: '请选择片段来源',
    choices: [
      'file',
      'clip',
    ]
  },
  {
    name: 'description',
    type: 'input',
    default: '使用片段名称',
    message: '请输入片段描述',
    validate (val) {
      if (!val) {
        return '描述不能为空'
      }
      return true
    }
  }
]

const prompts = () => new Promise(resolve => {
  inquirer.prompt(questions).then(({ result, prefix, body, description }) => {
    if (result) {
      resultFile = result
    }
    if (prefix) {
      resultMap.prefix = prefix
    }
    if (description) {
      resultMap.description = description === '使用片段名称' ? prefix : description
    }
    if (body) {
      if (body === 'clip') {
        content = clipboardy.readSync()
      } else {
        let data = fs.readFileSync(codeFile)
        content = toSnippet(data)
      }
      resultMap.body = content.split('\n')
    }
    let params = '**/**/*'

    resolve({
      params,
    })
  })
})


prompts().then(({ params }) => {
  const map = getMap(resultFile)

  var ret = {}
  ret[resultMap.prefix] = resultMap

  ret = Object.assign(map, ret)

  fs.writeFileSync(resultFile, JSON.stringify(ret, null, 2))

  console.log(`
代码片段生成成功
${resultFile}
`.green)

})

// 获取片段对象
function getMap(fileName) {
  fileName = fileName
  let txt = fs.readFileSync(fileName)
  txt = txt || '{}'
  return JSON.parse(txt)
}

// 代码转成片段，清除空格，转化$
function toSnippet(data) {
  var arr = data.toString().split('\n')
  arr.forEach((val, index) => {
    arr[index] = arr[index].trim().replace(/\$/g, '\$\$\$')
  })
  return arr.toString()
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
