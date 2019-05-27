
export declare module DefinationsModel {

	export interface ITemplateProps {
		fileName: string;
		isCustomFileName?: boolean;
		customFileName?: string;
		isFileNameAdd?: boolean;
	}

	export interface IAnswers {
		isFileNameAdd: boolean;
		fileName: string;
		isCustomFileName: boolean;
		customFileName?: string;
	}

	export interface IAddCollection {
		templateProps: ITemplateProps;
	}

	export interface IWriteFile {
		dirPath: string;
		getFileContent: Function;
		isCustomFileName?: boolean;
		message: string;
	}

	export interface ICreateTest {
		templatePath: string;
		templateProps: ITemplateProps;
		answers: IAnswers;
		dirPath: string;
		successMessage: string;
	}

	export interface ICreateFileOptions{
		isFileNameAdd: boolean;
		isCustomFileName?: boolean;
		customFileName?: string;
	}

	export interface IReplaceContent {
		filetoUpdate: string;
		fileDir: string;
		regexKey: RegExp;
		message: string;
		getFileContent(): string;
	}
	
}
