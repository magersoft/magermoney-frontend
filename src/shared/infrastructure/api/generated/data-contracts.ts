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

export interface CreateUserDto {
	email: string;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
}

export interface UserEntity {
	id: number;
	email: string;
	phone?: string | null;
	authCode?: string | null;
	darkMode: boolean;
	language: string;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
}

export interface UpdateUserDto {
	email?: string;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
	authCode?: string | null;
}

export interface LoginAuthDto {
	email?: string | null;
	phone?: string | null;
}

export interface DetectUserDto {
	id: number;
	email: string;
	phone?: string | null;
	darkMode: boolean;
	language: string;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
}

export interface VerifyAuthDto {
	authCode: string;
	userId: number;
}

export interface VerifyUserDto {
	accessToken: string | null;
	email: string;
	phone: string;
}
