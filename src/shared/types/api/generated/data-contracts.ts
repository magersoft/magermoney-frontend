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
	darkMode?: boolean;
	language?: string;
}

export interface VerifyUserDto {
	accessToken: string | null;
	email: string;
	phone: string;
	isFirstTime: boolean;
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
	currency: string;
}

export interface UpdateUserDto {
	email?: string;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
	authCode?: string | null;
	isFirstTime?: boolean | null;
}

export interface CreateIncomeSourceDto {
	title: string;
	description?: string | null;
	amount: number;
	currency: string;
}

export interface CurrencyEntity {
	id: number;
	symbol: string;
	name: string;
	code: string;
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
	currency: CurrencyEntity;
	currencyId: string;
	userId: number;
}

export interface UpdateIncomeSourceDto {
	title?: string;
	description?: string | null;
	amount?: number;
	currency?: string;
}

export interface CreateSavedFundDto {
	source: string;
	amount: number;
	currency: string;
	order?: number;
}

export interface SavedFundEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	source: string;
	amount: number;
	currency: CurrencyEntity;
	currencyId: string;
	userId: number;
	order: number;
}

export interface UpdateSavedFundDto {
	source?: string;
	amount?: number;
	order?: number;
}

export interface UpdateOrdersSavedFundsDto {
	ids: string[];
}

export interface CreateAccumulationFundDto {
	percent: number;
}

export interface AccumulationFundEntity {
	id: number;
	percent: number;
	userId?: number | null;
}

export interface UpdateAccumulationFundDto {
	percent?: number;
}

export interface TotalBalanceDto {
	amount: number;
	currency: string;
}

export interface TotalMonthlyIncomesDto {
	amount: number;
	currency: string;
}

export interface TotalMonthlyExpensesDto {
	amount: number;
	currency: string;
}

export interface MonthlyBudgetDto {
	budget: number;
	spent: number;
	restAmount: number;
	restAmountPercentage: number;
	currency: string;
}

export interface PercentByAmountDto {
	percent: number;
	currency: string;
	balance: number;
	amount: number;
}

export interface AmountByPercentDto {
	amount: number;
	currency: string;
	balance: number;
	percent: number;
}

export interface CreateExpenseSourceDto {
	title: string;
	amount: number;
	currency: string;
}

export interface ExpenseSourceEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	title: string;
	amount: number;
	currency: CurrencyEntity;
	currencyId: number;
	userId: number;
}

export interface UpdateExpenseSourceDto {
	title?: string;
	amount?: number;
	currency?: string;
}

export interface CreateIncomeDto {
	title?: string;
	amount?: number;
	currency?: string;
	/** @format date-time */
	dateOfIssue: string;
	incomeSourceId?: number;
	savedFundId?: number;
}

export interface IncomeEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	title: string;
	amount: number;
	/** @format date-time */
	dateOfIssue: string;
	currencyId: number;
	savedFundId: number;
	incomeSourceId?: number;
	userId: number;
}

export interface UpdateIncomeDto {
	title?: string;
	/** @format date-time */
	dateOfIssue: string;
}

export interface CreateExpenseDto {
	title?: string;
	amount?: number;
	currency?: string;
	/** @format date-time */
	dateOfIssue: string;
	expenseSourceId?: number;
	savedFundId?: number;
}

export interface ExpenseEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	title: string;
	amount: number;
	/** @format date-time */
	dateOfIssue: string;
	currencyId: number;
	savedFundId: number;
	expenseSourceId: number;
	userId: number;
}

export interface UpdateExpenseDto {
	title?: string;
	/** @format date-time */
	dateOfIssue: string;
}

export interface CalculationsControllerGetTotalBalanceParams {
	currency: string;
}

export interface CalculationsControllerGetTotalMonthlyIncomesParams {
	currency: string;
}

export interface CalculationsControllerGetTotalMonthlyExpensesParams {
	currency: string;
}

export interface CalculationsControllerGetMonthlyBudgetParams {
	currency: string;
}

export interface CalculationsControllerGetPercentByAmountParams {
	value: string;
	currency: string;
}

export interface CalculationsControllerGetAmountByPercentParams {
	value: string;
	currency: string;
}
