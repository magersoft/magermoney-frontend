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

export interface DetectUserEntity {
	id: number;
}

export interface VerifyAuthDto {
	authCode: string;
	userId: number;
	darkMode?: boolean;
	language?: string;
}

export interface VerifyUserEntity {
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
	color?: string;
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
	color: string;
	order: number;
}

export interface UpdateOrdersSavedFundsDto {
	ids: string[];
}

export interface UpdateSavedFundDto {
	source?: string;
	amount?: number;
	color?: string;
	order?: number;
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

export interface TotalBalanceEntity {
	amount: number;
	currency: string;
}

export interface TotalMonthlyIncomesEntity {
	amount: number;
	currency: string;
}

export interface TotalMonthlyExpensesEntity {
	amount: number;
	currency: string;
}

export interface MonthlyBudgetEntity {
	budget: number;
	spent: number;
	restAmount: number;
	restAmountPercentage: number;
	currency: string;
}

export interface PercentByAmountEntity {
	percent: number;
	currency: string;
	balance: number;
	amount: number;
}

export interface AmountByPercentEntity {
	amount: number;
	currency: string;
	balance: number;
	percent: number;
}

export interface TransferDetailsEntity {
	outcome: TotalBalanceEntity;
	income: TotalBalanceEntity;
	rate: TotalBalanceEntity;
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
	title: string;
	amount: number;
	currency: string;
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
	currency: CurrencyEntity;
	currencyId: number;
	savedFundId: number;
	incomeSourceId?: number;
	userId: number;
}

export interface UpdateIncomeDto {
	title: string;
	/** @format date-time */
	dateOfIssue: string;
}

export interface CreateExpenseDto {
	title: string;
	amount: number;
	currency: string;
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
	currency: CurrencyEntity;
	currencyId: number;
	savedFundId: number;
	expenseSourceId: number;
	userId: number;
}

export interface UpdateExpenseDto {
	title: string;
	/** @format date-time */
	dateOfIssue: string;
}

export interface CreateTransferDto {
	amount: number;
	currency: string;
	toId: number;
	fromId: number;
}

export interface TransferEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	amount: number;
	toId: number;
	fromId: number;
	currencyId: number;
	userId: number;
}

export type UpdateTransferDto = object;

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

export interface CalculationsControllerGetTransferDetailsParams {
	fromId: number;
	toId: number;
	amount: number;
	currency: string;
}

export interface IncomesControllerFindAllParams {
	page?: number;
	perPage?: number;
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
}

export interface ExpensesControllerFindAllParams {
	page?: number;
	perPage?: number;
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
}
