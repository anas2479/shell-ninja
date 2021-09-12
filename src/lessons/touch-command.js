const Lesson = require("./Lesson");
const _  = require('lodash');
const checkAnswer = require("../utilities/checkAnswer");


module.exports = class Touch extends Lesson{
    constructor(title, description, shell){
        super()

        title.innerHTML =`The Touch command creates a new file in the current folder. To use it, you'd type "touch" followed by the name of the file you want to create.`
        description.innerHTML = `⚠ This command may be different in other CLIs, i.e Powershell.`

        shell.input(`Try creating a file with your name.`, (answer)=>{
            let userResponce = _.words(answer)
            checkAnswer(userResponce[0], 'touch', ()=>{
                shell.runCommand('touch', _.slice(userResponce,1,1000))

                title.innerHTML = `Awesome! A file named "${ _.slice(userResponce,1,1000)}" was created.`
            })
        })
    }
}