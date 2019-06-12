import { Props } from 'react';

/**
 * @export @interface HttpModel
 */
declare namespace HttpModel {
	/**
	 * @interface Request
	 */
	type IRequest = (
		url: string,
		params?: IRequestQueryPayload & {},
		payload?: IRequestPayload & {},
	) => Promise<any>;
	export interface IRequestPayload {
		[key: string]: any;
	}

	export interface IRequestQueryPayload {
		[key: string]: any;
	}
}
