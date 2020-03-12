// const inquirer = require('inquirer')
// const shell = require('shelljs')
// // Node colorful always

// const resultFile = '../aa.test.code-snippets'

// const questions = [
//   {
//     name: 'conf',
//     type: 'confirm',
//     message: '建议上线前选择全部测试用例（默认为测试全部）',
//   },
//   {
//     name: 'project',
//     message: 'Please input the project name which you want to check:',
//     filter: src => src.replace(/.spec.ts$/gi, ''),
//     validate: str => Boolean(str.split('/').length === 2 || str.split('/').length === 3),
//     when: res => !Boolean(res.conf)
//   },
// ]

// const prompts = () => new Promise(resolve => {
//   inquirer.prompt(questions).then(({ conf,  project }) => {
//     let params = '**/**/*'
//     if (!conf) {
//       params = project
//     }
//     resolve({
//       params,
//     })
//   })
// })


// prompts().then(({ params}) => {
//   shell.exec(`
//   mocha -r ts-node/register test/${params}.spec.ts --colors
// `, { async: true })
// })
