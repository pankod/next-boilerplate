#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const figlet = require("figlet");
const inquirer = require("inquirer");
const class_component_1 = require("./helper_scripts/definations/class-component");
const functional_component_1 = require("./helper_scripts/definations/functional-component");
const page_component_1 = require("./helper_scripts/definations/page-component");
console.clear();
console.log(figlet.textSync('Pankod'));
const questions = [
    {
        choices: ['page', 'functional component', 'class component'],
        message: 'What do you want to add?',
        name: 'fileType',
        type: 'list'
    }
];
program
    .command('addFile')
    .alias('a')
    .description('Add a file')
    .action(() => __awaiter(this, void 0, void 0, function* () {
    const answers = yield inquirer.prompt(questions);
    switch (answers.fileType) {
        case 'functional component':
            yield functional_component_1.funcComp.showQuestions();
            break;
        case 'class component':
            yield class_component_1.classComp.showQuestions();
            break;
        case 'page':
            yield page_component_1.pageComp.showQuestions();
            break;
        default:
            break;
    }
}));
program.parse(process.argv);
//# sourceMappingURL=index.js.map