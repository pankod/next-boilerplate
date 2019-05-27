
export declare module DefinationsModel {
	export interface IInquirerFunc {
		showQuestions(): Promise<void>;
	}

	export interface ITemplateProps {
		fileName: string;
		lowerFileName?: string;
		interfaceName?: string;
		isHaveStyle?: boolean;
		isConnectStore?: boolean;
		isClass?: boolean;
		isHavePath?: boolean;
		routePath?: string;
	}

	export interface IAnswers {
		fileName: string;
		lowerFileName?: string;
		interfaceName?: string;
		isHaveStyle?: boolean;
		isConnectStore?: boolean;
		isPage?: boolean;
		isHaveReducer?: boolean;
		isHavePath?: boolean;
		routePath?: string;
	}

	export interface IReplaceContent {
		filetoUpdate: string;
		fileDir: string;
		regexKey: RegExp;
		message: string;
		lowerFileName?: string;
		getFileContent(): string;
	}

	export interface IAddIndex {
		dirPath: string;
		getFileContent: Function;
		message: string;
	}

	export interface IWriteFile {
		dirPath: string;
		getFileContent: Function;
		message: string;
	}
}
