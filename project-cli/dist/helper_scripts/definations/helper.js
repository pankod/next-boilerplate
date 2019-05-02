"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const logSymbols = require("log-symbols");
const mustache = require("mustache");
const path = require("path");
exports.Config = {
    interfaceDir: '../src/Interfaces',
    compInterfaceDir: '../src/Interfaces/Components',
    pageInterfaceDir: '../src/Interfaces/Pages',
    reduxInterfaceDir: '../src/Interfaces/Redux',
    componentsDir: '../src/Components',
    definationsDir: '../src/Definations',
    pagesDir: '../pages',
    reducerDir: '../src/Redux/Reducers',
    routesDir: '../app',
    storeDir: '../src'
};
exports.Helper = {
    addRoute: (answers) => {
        const templateProps = {
            fileName: answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase()),
            isHavePath: answers.isHavePath,
            routePath: answers.routePath
        };
        const replaceContentParams = {
            fileDir: `${exports.Config.routesDir}/routes.js`,
            filetoUpdate: fs.readFileSync(path.resolve('', `${exports.Config.routesDir}/routes.js`), 'utf8'),
            getFileContent: () => exports.Helper.getTemplate('./helper_scripts/templates/routes.mustache', templateProps),
            message: 'Added route path to routes.js',
            regexKey: /^(?:[\t ]*(?:\r?\n|\r))+module.exports = routes;/gm
        };
        exports.Helper.replaceContent(replaceContentParams);
    },
    isAlreadyExist: (startPath, val) => {
        val = val.replace(/\b\w/g, foo => foo.toUpperCase());
        return fs.existsSync(path.resolve('', `${startPath}/${val}`));
    },
    getTemplate: (templatePath, templateProps) => (mustache.render(fs.readFileSync(path.resolve('', templatePath), 'utf8'), templateProps)),
    writeFile: (params) => {
        fs.writeFileSync(path.resolve('', params.dirPath), params.getFileContent(), err => {
            if (err)
                throw err;
            console.log(logSymbols.success, params.message);
        });
    },
    createFile: (dirPath) => {
        fs.mkdirSync(path.resolve('', dirPath));
    },
    addIndex: (params) => {
        fs.appendFile(path.resolve('', params.dirPath), `${params.getFileContent()}\n`, err => {
            if (err)
                throw err;
            console.log(logSymbols.success, params.message);
        });
    },
    createInterface: (answers, isClass) => {
        const { fileName, lowerFileName, isPage, isConnectStore } = answers;
        const templatePath = './helper_scripts/templates/interfaces/component.d.mustache';
        const templateProps = { fileName, isClass, lowerFileName };
        const pageDirPath = `${exports.Config.pageInterfaceDir}/${fileName}.d.ts`;
        const compDirPath = `${exports.Config.compInterfaceDir}/${fileName}.d.ts`;
        const pageInterfaceIndex = './helper_scripts/templates/interfaces/page-index.d.mustache';
        const compIntefaceIndex = './helper_scripts/templates/interfaces/component-index.d.mustache';
        const storeInterface = './helper_scripts/templates/interfaces/redux-store.d.mustache';
        const writeFileProps = {
            dirPath: isPage ? pageDirPath : compDirPath,
            getFileContent: () => exports.Helper.getTemplate(templatePath, templateProps),
            message: 'Created new interface file.'
        };
        const replaceContentParams = {
            fileDir: `${exports.Config.interfaceDir}/index.ts`,
            filetoUpdate: fs.readFileSync(path.resolve('', `${exports.Config.interfaceDir}/index.ts`), 'utf8'),
            getFileContent: () => exports.Helper.getTemplate(isPage ? pageInterfaceIndex : compIntefaceIndex, templateProps),
            message: 'Interface added to index',
            regexKey: isPage ? /...PAGE INTERFACES/g : /...COMPONENT INTERFACES/g
        };
        const replaceStoreParams = {
            fileDir: `${exports.Config.reduxInterfaceDir}/Store.d.ts`,
            filetoUpdate: fs.readFileSync(path.resolve('', `${exports.Config.reduxInterfaceDir}/Store.d.ts`), 'utf8'),
            getFileContent: () => exports.Helper.getTemplate(storeInterface, templateProps),
            message: 'Interface added to redux store.d.ts ',
            regexKey: /export type IStore\s[=]\s[{]/g
        };
        exports.Helper.writeFile(writeFileProps);
        exports.Helper.replaceContent(replaceContentParams);
        if (isPage || isConnectStore) {
            exports.Helper.replaceContent(replaceStoreParams);
        }
    },
    createStyle: (answers) => {
        const templatePath = './helper_scripts/templates/styles.mustache';
        const templateProps = { fileName: answers.fileName };
        const pageDirPath = `${exports.Config.pagesDir}/${answers.fileName.replace(/\b\w/g, foo => foo.toLowerCase())}/style.scss`;
        const compDirPath = `${exports.Config.componentsDir}/${answers.fileName}/style.scss`;
        const writeFileProps = {
            dirPath: answers.isPage ? pageDirPath : compDirPath,
            getFileContent: () => exports.Helper.getTemplate(templatePath, templateProps),
            message: 'Created new style file'
        };
        exports.Helper.writeFile(writeFileProps);
    },
    replaceContent: (params) => {
        const replaceFile = params.filetoUpdate.replace(params.regexKey, params.getFileContent());
        const writeFileProps = {
            dirPath: params.fileDir,
            getFileContent: () => replaceFile,
            message: params.message
        };
        exports.Helper.writeFile(writeFileProps);
    },
    addActionConstIndex: (templateProps) => {
        const replaceContentParams = {
            fileDir: `${exports.Config.definationsDir}/ActionConsts.ts`,
            filetoUpdate: fs.readFileSync(path.resolve('', `${exports.Config.definationsDir}/ActionConsts.ts`), 'utf8'),
            getFileContent: () => exports.Helper.getTemplate('./helper_scripts/templates/reducers/action-const.mustache', templateProps),
            message: 'Added to actionConsts',
            regexKey: /export const ActionConsts\s[=]\s[{]/g
        };
        exports.Helper.replaceContent(replaceContentParams);
    },
    addReducerIndex: (templateProps) => {
        const replaceContentParams = {
            fileDir: `${exports.Config.reducerDir}/index.ts`,
            filetoUpdate: fs.readFileSync(path.resolve('', `${exports.Config.reducerDir}/index.ts`), 'utf8'),
            getFileContent: () => exports.Helper.getTemplate('./helper_scripts/templates/reducers/store.mustache', templateProps),
            message: 'Reducer added to combineReducers in reducers index',
            regexKey: /export default combineReducers[(][{]/g
        };
        exports.Helper.replaceContent(replaceContentParams);
    },
    addReducer: (answers) => {
        const { fileName, lowerFileName, isPage, isConnectStore } = answers;
        const reducerFileDir = `${exports.Config.reducerDir}/${lowerFileName}.ts`;
        const reducerTemplate = './helper_scripts/templates/reducers/reducer.mustache';
        const templateProps = { fileName, lowerFileName };
        const replaceContentParams = {
            fileDir: `${exports.Config.reducerDir}/index.ts`,
            filetoUpdate: fs.readFileSync(path.resolve('', `${exports.Config.reducerDir}/index.ts`), 'utf8'),
            getFileContent: () => exports.Helper.getTemplate('./helper_scripts/templates/reducers/index.mustache', templateProps),
            message: 'Reducer added to to index.ts',
            regexKey: /import { combineReducers } from 'redux';/g
        };
        const writeFileProps = {
            dirPath: reducerFileDir,
            getFileContent: () => exports.Helper.getTemplate(reducerTemplate, templateProps),
            message: 'Created new reducer file'
        };
        exports.Helper.writeFile(writeFileProps);
        exports.Helper.replaceContent(replaceContentParams);
        exports.Helper.addReducerIndex(templateProps);
        exports.Helper.addActionConstIndex(templateProps);
    },
    createClassComponent: (answers) => {
        const { lowerFileName } = answers;
        const pagesDir = `${exports.Config.pagesDir}/${lowerFileName}`;
        const classDir = answers.isPage ? pagesDir : `${exports.Config.componentsDir}/${answers.fileName}`;
        const templatePath = './helper_scripts/templates/components/class.mustache';
        const templateProps = {
            fileName: answers.fileName,
            interfaceName: `I${answers.fileName}`,
            isConnectStore: answers.isConnectStore,
            isHaveStyle: answers.isHaveStyle
        };
        const indexTemplate = './helper_scripts/templates/components/index.mustache';
        const addIndexParams = {
            dirPath: `${exports.Config.componentsDir}/index.ts`,
            getFileContent: () => exports.Helper.getTemplate(indexTemplate, templateProps),
            message: 'Component added to index.ts'
        };
        const writeFileProps = {
            dirPath: `${classDir}/index.tsx`,
            getFileContent: () => exports.Helper.getTemplate(templatePath, templateProps),
            message: 'Added new class component'
        };
        exports.Helper.createFile(classDir);
        exports.Helper.writeFile(writeFileProps);
        exports.Helper.createInterface(answers, true);
        exports.Helper.addReducer(templateProps);
        if (!answers.isPage) {
            exports.Helper.addIndex(addIndexParams);
        }
    },
    createFuncComponent: (answers) => {
        answers.fileName = answers.fileName.replace(/\b\w/g, foo => foo.toUpperCase());
        const funcDir = `${exports.Config.componentsDir}/${answers.fileName}`;
        const templatePath = './helper_scripts/templates/components/functional.mustache';
        const templateProps = {
            fileName: answers.fileName,
            interfaceName: `I${answers.fileName}`,
            isHaveStyle: answers.isHaveStyle
        };
        const indexTemplate = './helper_scripts/templates/components/index.mustache';
        const addIndexParams = {
            dirPath: `${exports.Config.componentsDir}/index.ts`,
            getFileContent: () => exports.Helper.getTemplate(indexTemplate, templateProps),
            message: 'Component added to index.ts.'
        };
        const writeFileProps = {
            dirPath: `${funcDir}/index.tsx`,
            getFileContent: () => exports.Helper.getTemplate(templatePath, templateProps),
            message: 'Created new functional component.'
        };
        exports.Helper.createFile(funcDir);
        exports.Helper.writeFile(writeFileProps);
        exports.Helper.addIndex(addIndexParams);
        exports.Helper.createInterface(answers, false);
    }
};
//# sourceMappingURL=helper.js.map