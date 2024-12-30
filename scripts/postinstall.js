import boxen from 'boxen'
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
import { exec } from 'child_process'

const messageOptions = {
    title: 'It’s installation time',
    titleAlignment: 'center',
    textAlignment: 'center',
    padding: 1,
    borderStyle: 'round',
    borderColor: 'green',
    backgroundColor: 'black',
    width: 100,
}

const errorOptions = {
    padding: 1,
    borderStyle: 'round',
    borderColor: 'grey',
    backgroundColor: 'black',
    width: 100,
}

const msgBox = boxen(
    chalk.white('This might take a bit, please wait until the installation finishes...'),
    messageOptions,
)

const errorBox = boxen(
    chalk.red('An error occurred while installing the dependencies.') + '\n' + '\n' +
  chalk.white('If you want to install the dependencies manually, run the following command:') + '\n' + '\n' +
  chalk.grey('npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-semistandard eslint-plugin-n eslint-plugin-oxlint eslint-plugin-promise globals standard typescript'),
    errorOptions,
)

console.log(msgBox)

const str = `            ≠≠≠≠≠                                                                           =====  
           ≠≠≠≠≠                                                                           ===== 
          ≠≠≠≠≠                                                                           ===== 
         ≠≠≠≠≠≠≠≠≠≠≠     ≠≠≠≠      ≠≠≠≠      ≠≠≠≠≠≠≠      ≠≠≠≠≠≠≠≠≠≠         ≠≠≠≠≠≠≠       
        ≠≠≠≠≠≠≠≠≠≠≠≠≠   ≠≠≠≠≠    ≠≠≠≠≠   ≠≠≠≠≠≠≠≠≠≠≠≠   ≠≠≠≠≠≠≠≠≠≠≠≠≠    ≠≠≠≠≠≠≠≠≠≠≠≠   ≠≠≠≠≠ 
       ≠≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠    ≠≠≠≠≠  ≠≠≠≠      ≠≠≠≠  ≠≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠      ≠≠≠≠  ≠≠≠≠≠ 
      ≠≠≠≠≠    ≠≠≠≠≠  ≠≠≠≠≠    ≠≠≠≠≠ ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠     ≠≠≠≠  ≠≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠ 
     ≠≠≠≠≠    ≠≠≠≠≠  ≠≠≠≠≠    ≠≠≠≠≠ ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠     ≠≠≠≠ ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠ 
    ≠≠≠≠≠    ≠≠≠≠≠  ≠≠≠≠≠    ≠≠≠≠≠ ≠≠≠≠≠            ≠≠≠≠≠     ≠≠≠≠  ≠≠≠≠            ≠≠≠≠≠ 
   ≠≠≠≠≠    ≠≠≠≠≠  ≠≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠           ≠≠≠≠≠     ≠≠≠≠  ≠≠≠≠≠≠          ≠≠≠≠≠ 
  ≠≠≠≠≠    ≠≠≠≠≠   ≠≠≠≠≠≠≠≠≠≠≠≠≠   ≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠     ≠≠≠≠   ≠≠≠≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠ 
 ≠≠≠≠≠     ≠≠≠≠     ≠≠≠≠≠≠≠≠≠≠≠      ≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠     ≠≠≠≠      ≠≠≠≠≠≠≠≠≠≠  ≠≠≠≠≠ `
chalkAnimation.rainbow('\n' + str + '\n')

exec('npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-semistandard eslint-plugin-n eslint-plugin-oxlint eslint-plugin-promise globals standard typescript', (err, stdout, stderr) => {
    if (err) {
        console.error(chalk.red(err))
        console.error(errorBox)
        return
    }
    console.log(chalk.green('\n' + 'All dependencies have been successfully installed. You are ready to go!'))
    console.log(chalk.white(stdout))
    if (stderr) console.error(chalk.yellow(stderr))
})
