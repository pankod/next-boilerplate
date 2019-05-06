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
const inquirer = require("inquirer");
const helper_1 = require("./helper");
exports.pageComp = {
    showQuestions: () => __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                message: 'Enter page name',
                name: 'fileName',
                type: 'input',
                validate(val) {
                    if (val.length) {
                        if (helper_1.Helper.isAlreadyExist(helper_1.Config.pagesDir, val)) {
                            return 'This component name already used before, enter new name.';
                        }
                        return true;
                    }
                    return 'Can not be empty';
                }
            },
            {
                choices: [
                    new inquirer.Separator(),
                    {
                        name: 'Yes, I want to add custom path?',
                        value: true
                    },
                    {
                        name: 'No, use default.',
                        value: false
                    }
                ],
                message: 'Do you want to add custom route or use default route name?',
                name: 'isHavePath',
                type: 'list'
            },
            {
                message: 'Enter route name',
                name: 'routePath',
                type: 'input',
                when: ({ isHavePath }) => isHavePath
            },
            {
                default: false,
                message: 'Do you want to have a connection to store?',
                name: 'isConnectStore',
                type: 'confirm'
            },
            {
                choices: [
                    new inquirer.Separator(),
                    {
                        name: 'Yes, I want to have new reducer.',
                        value: true
                    },
                    {
                        name: 'No, do not create a new reducer.',
                        value: false
                    }
                ],
                message: 'Do you want to create a new reducer or use your own?',
                name: 'isHaveReducer',
                type: 'list',
                when: ({ isConnectStore }) => isConnectStore
            },
            {
                default: true,
                message: 'Do you want to add a style file?',
                name: 'isHaveStyle',
                type: 'confirm'
            }
        ];
        const answers = yield inquirer.prompt(questions);
        answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
        answers.lowerFileName = answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase());
        answers.isPage = true;
        helper_1.Helper.createClassComponent(answers);
        helper_1.Helper.addRoute(answers);
        if (answers.isHaveStyle) {
            helper_1.Helper.createStyle(answers);
        }
    })
};
//# sourceMappingURL=page-component.js.map