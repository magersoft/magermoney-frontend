/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
	CreateIncomeSourceDto,
	CreateUserDto,
	DetectUserDto,
	IncomeSourceEntity,
	LoginAuthDto,
	UpdateIncomeSourceDto,
	UpdateUserDto,
	UserEntity,
	VerifyAuthDto,
	VerifyUserDto
} from './data-contracts';

export namespace Api {
	/**
	 * No description
	 * @name AppControllerApplication
	 * @request GET:/api/v1
	 * @response `200` `void`
	 */
	export namespace AppControllerApplication {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerCreate
	 * @request POST:/api/v1/user
	 * @secure
	 * @response `201` `UserEntity`
	 */
	export namespace UserControllerCreate {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = CreateUserDto;
		export type RequestHeaders = {};
		export type ResponseBody = UserEntity;
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerFindAll
	 * @request GET:/api/v1/user
	 * @secure
	 * @response `200` `(UserEntity)[]`
	 */
	export namespace UserControllerFindAll {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = UserEntity[];
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerFindOne
	 * @request GET:/api/v1/user/{id}
	 * @secure
	 * @response `200` `UserEntity`
	 */
	export namespace UserControllerFindOne {
		export type RequestParams = {
			id: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = UserEntity;
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerUpdate
	 * @request PATCH:/api/v1/user/{id}
	 * @secure
	 * @response `200` `UserEntity`
	 */
	export namespace UserControllerUpdate {
		export type RequestParams = {
			id: string;
		};
		export type RequestQuery = {};
		export type RequestBody = UpdateUserDto;
		export type RequestHeaders = {};
		export type ResponseBody = UserEntity;
	}

	/**
	 * No description
	 * @tags user
	 * @name UserControllerRemove
	 * @request DELETE:/api/v1/user/{id}
	 * @secure
	 * @response `200` `UserEntity`
	 */
	export namespace UserControllerRemove {
		export type RequestParams = {
			id: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = UserEntity;
	}

	/**
	 * No description
	 * @tags income-source
	 * @name IncomeSourceControllerCreate
	 * @request POST:/api/v1/income-source
	 * @secure
	 * @response `201` `IncomeSourceEntity`
	 */
	export namespace IncomeSourceControllerCreate {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = CreateIncomeSourceDto;
		export type RequestHeaders = {};
		export type ResponseBody = IncomeSourceEntity;
	}

	/**
	 * No description
	 * @tags income-source
	 * @name IncomeSourceControllerFindAll
	 * @request GET:/api/v1/income-source
	 * @secure
	 * @response `200` `(IncomeSourceEntity)[]`
	 */
	export namespace IncomeSourceControllerFindAll {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = IncomeSourceEntity[];
	}

	/**
	 * No description
	 * @tags income-source
	 * @name IncomeSourceControllerFindOne
	 * @request GET:/api/v1/income-source/{id}
	 * @secure
	 * @response `200` `void`
	 */
	export namespace IncomeSourceControllerFindOne {
		export type RequestParams = {
			id: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * No description
	 * @tags income-source
	 * @name IncomeSourceControllerUpdate
	 * @request PATCH:/api/v1/income-source/{id}
	 * @secure
	 * @response `200` `void`
	 */
	export namespace IncomeSourceControllerUpdate {
		export type RequestParams = {
			id: string;
		};
		export type RequestQuery = {};
		export type RequestBody = UpdateIncomeSourceDto;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * No description
	 * @tags income-source
	 * @name IncomeSourceControllerRemove
	 * @request DELETE:/api/v1/income-source/{id}
	 * @secure
	 * @response `200` `void`
	 */
	export namespace IncomeSourceControllerRemove {
		export type RequestParams = {
			id: string;
		};
		export type RequestQuery = {};
		export type RequestBody = never;
		export type RequestHeaders = {};
		export type ResponseBody = void;
	}

	/**
	 * No description
	 * @tags auth
	 * @name AuthControllerDetectUser
	 * @request POST:/api/v1/auth/detect-user
	 * @response `201` `DetectUserDto`
	 */
	export namespace AuthControllerDetectUser {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = LoginAuthDto;
		export type RequestHeaders = {};
		export type ResponseBody = DetectUserDto;
	}

	/**
	 * No description
	 * @tags auth
	 * @name AuthControllerVerifyUser
	 * @request POST:/api/v1/auth/verify-user
	 * @response `201` `VerifyUserDto`
	 */
	export namespace AuthControllerVerifyUser {
		export type RequestParams = {};
		export type RequestQuery = {};
		export type RequestBody = VerifyAuthDto;
		export type RequestHeaders = {};
		export type ResponseBody = VerifyUserDto;
	}
}
