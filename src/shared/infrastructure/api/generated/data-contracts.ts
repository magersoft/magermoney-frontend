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

export interface LoginAuthDto {
	email?: string | null;
	phone?: string | null;
}

export interface DetectUserDto {
	id: number;
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

export interface CreateUserDto {
	email: string;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
}

export interface UserEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	email: string;
	phone?: string | null;
	authCode?: string | null;
	darkMode: boolean;
	isFirstTime: boolean;
	language: string;
}

export interface UpdateUserDto {
	email?: string;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
	authCode?: string | null;
}

export interface CreateIncomeSourceDto {
	title: string;
	description?: string | null;
	amount: number;
	currency: string;
}

export interface IncomeSourceEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	title: string;
	description?: string | null;
	amount: number;
	currency: string;
	userId?: number | null;
}

export interface UpdateIncomeSourceDto {
	title?: string;
	description?: string | null;
	amount?: number;
	currency?: string;
}

export interface CurrencyEntity {
	symbol: string;
	name: string;
	code: string;
}
