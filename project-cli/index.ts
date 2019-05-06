#!/usr/bin/env node

import * as clear from 'clear';
import * as program from 'commander';
import * as figlet from 'figlet';
import * as inquirer from 'inquirer';

import { classComp } from './helper_scripts/definations/class-component';
import { funcComp } from './helper_scripts/definations/functional-component';
import { pageComp } from './helper_scripts/definations/page-component';

clear();
console.log(
		figlet.textSync('Pankod')
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
			case 'class component':
				await classComp.showQuestions();
				break;
			case 'page':
				await pageComp.showQuestions();
				break;
			default:
				break;
		}
	});

program.parse(process.argv);
