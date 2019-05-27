#!/usr/bin/env node

import * as chalk from 'chalk';
/* import * as clear from 'clear'; */
import * as program from 'commander';
import * as figlet from 'figlet';
import * as inquirer from 'inquirer';

import { funcComp } from './src/definations/functional-component';

console.clear();

console.log(
	chalk.default(
		figlet.textSync('Pankod CLI Boilerplate')
	)
);

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
	.action(async () => {
		const answers: { fileType: string } = await inquirer.prompt(questions);
		switch (answers.fileType) {
			case 'functional component':
				await funcComp.showQuestions();
				break;
			default:
				break;
		}
	});

program.parse(process.argv);
