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
	CreateUserDto,
	DetectUserDto,
	LoginAuthDto,
	UpdateUserDto,
	UserEntity,
	VerifyAuthDto,
	VerifyUserDto
} from './data-contracts';

export namespace Api {
	/**
	 * No description
	 * @tags Application
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
	 * @tags User
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
	 * @tags User
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
	 * @tags User
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
	 * @tags User
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
	 * @tags User
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
	 * @tags Auth
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
	 * @tags Auth
	 * @name AuthControllerVerifyUser
	 * @request POST:/api/v1/auth/verify-code
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
