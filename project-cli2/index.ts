#!/usr/bin/env node

import * as chalk from 'chalk';
/* import * as clear from 'clear'; */
import * as program from 'commander';
import * as figlet from 'figlet';
import * as inquirer from 'inquirer';

import { addCollectionQuestion } from './src/definations/addCollection';
import { simpleTextQuestion } from './src/definations/simpleText';

console.clear();

console.log(
	chalk.default(
		figlet.textSync('Pankod CLI Boilerplate')
	)
);

const questions = [
	{
		choices: ['Create simple file', 'Create file and add to collection'],
		message: 'What would you like to do?',
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
			case 'Create simple file':
			await simpleTextQuestion.showQuestions();
				break;
			case 'Create file and add to collection':
			await addCollectionQuestion.showQuestions();
				break;
			default:
				break;
		}
	});

program.parse(process.argv);
