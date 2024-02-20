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
	email?: string | null;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
	currency?: string;
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
	role: 'USER' | 'ADMIN';
}

export interface UpdateUserDto {
	email?: string | null;
	phone?: string | null;
	darkMode?: boolean;
	language?: string;
	currency?: string;
	authCode?: string | null;
	isFirstTime?: boolean | null;
}

export interface CreateIncomeSourceDto {
	title?: string;
	description?: string | null;
	amount: number;
	categoryId?: number;
	currency: string;
}

export interface CurrencyEntity {
	id: number;
	symbol: string;
	name: string;
	code: string;
}

export interface CategoryRelationEntity {
	name: string;
}

export interface IncomeSourceEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	description?: string | null;
	amount: number;
	currency: CurrencyEntity;
	currencyId: string;
	category: CategoryRelationEntity;
	categoryId: number;
	userId: number;
}

export interface UpdateIncomeSourceDto {
	title?: string;
	description?: string | null;
	amount?: number;
	categoryId?: number;
	currency?: string;
}

export interface CreateAllByUserDto {
	currenciesIds: number[];
}

export interface CurrencyRateEntity {
	from: string;
	to: string;
	price: number;
}

export interface CreateCategoryDto {
	name: string;
	type: 'INCOME' | 'EXPENSE' | 'SAVED';
}

export interface CategoryEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	name: string;
	type: 'INCOME' | 'EXPENSE' | 'SAVED';
	userId?: number | null;
}

export interface UpdateCategoryDto {
	name: string;
}

export interface CreateSavedFundDto {
	source: string;
	amount: number;
	currency: string;
	categoryId?: number;
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

export interface TotalIncomesEntity {
	amount: number;
	currency: string;
}

export interface TotalExpensesEntity {
	amount: number;
	currency: string;
}

export interface MonthlyBudgetEntity {
	budget: number;
	spent: number;
	restAmount: number;
	restAmountPercentage: number;
	accumulationFundAmount: number;
	availableAmountInDay: number;
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

export interface SummaryIncomesByCategoriesEntity {
	categoryId: number;
	title: string;
	amount: number;
	percent: number;
	currency: string;
}

export interface SummaryExpensesByCategoriesEntity {
	categoryId: number;
	title: string;
	amount: number;
	percent: number;
	currency: string;
}

export interface CreateExpenseSourceDto {
	title?: string;
	amount: number;
	categoryId?: number;
	currency: string;
}

export interface ExpenseSourceEntity {
	id: number;
	/** @format date-time */
	createdAt: string;
	/** @format date-time */
	updatedAt: string;
	amount: number;
	currency: CurrencyEntity;
	category: CategoryRelationEntity;
	categoryId: number;
	currencyId: number;
	userId: number;
}

export interface UpdateExpenseSourceDto {
	title?: string;
	amount?: number;
	categoryId?: number;
	currency?: string;
}

export interface CreateIncomeDto {
	title?: string;
	amount: number;
	currency: string;
	categoryId?: number;
	customCategoryName?: string;
	/** @format date-time */
	dateOfIssue: string;
	incomeSourceId?: number;
	savedFundId?: number;
}

export interface SavedFundRelationEntity {
	source: string;
	color: string;
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
	category: CategoryRelationEntity;
	categoryId: number;
	savedFund: SavedFundRelationEntity;
	savedFundId: number;
	incomeSourceId?: number;
	userId: number;
}

export interface UpdateIncomeDto {
	categoryId?: number;
	/** @format date-time */
	dateOfIssue: string;
}

export interface CreateExpenseDto {
	title?: string;
	amount: number;
	currency: string;
	categoryId?: number;
	customCategoryName?: string;
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
	category: CategoryRelationEntity;
	categoryId: number;
	savedFund: SavedFundRelationEntity;
	savedFundId: number;
	expenseSourceId: number;
	userId: number;
}

export interface UpdateExpenseDto {
	title?: string;
	categoryId?: number;
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

export interface HistoryEntity {
	type: 'income' | 'expense' | 'transfer';
	title: string;
	amount: number;
	currency: CurrencyEntity;
	category: CategoryRelationEntity;
	/** @format date-time */
	dateOfIssue: string;
	source: string;
}

export interface CategoriesControllerFindAllParams {
	page?: number;
	perPage?: number;
	type?: 'INCOME' | 'EXPENSE' | 'SAVED';
	isDefault?: boolean;
}

export interface CalculationsControllerGetTotalBalanceParams {
	currency: string;
}

export interface CalculationsControllerGetTotalIncomesParams {
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
	currency: string;
}

export interface CalculationsControllerGetTotalExpensesParams {
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
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

export interface CalculationsControllerGetSummaryIncomesByCategoriesParams {
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
	currency: string;
}

export interface CalculationsControllerGetSummaryExpensesByCategoriesParams {
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
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

export interface HistoryControllerFindAllParams {
	page?: number;
	perPage?: number;
	/** @format date-time */
	startDate?: string;
	/** @format date-time */
	endDate?: string;
	savedFundId?: number;
}
