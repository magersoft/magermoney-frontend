export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_MONTH = new Date().getMonth();
export const CURRENT_DAY = new Date().getDate();

export const BEGIN_MONTH = new Date(CURRENT_YEAR, CURRENT_MONTH, 1);
export const END_MONTH = new Date(CURRENT_YEAR, CURRENT_MONTH + 1, 0);

export const BEGIN_YEAR = new Date(CURRENT_YEAR, 0, 1);
export const END_YEAR = new Date(CURRENT_YEAR, 11, 31);

export const PREVIOUS_YEAR = new Date(CURRENT_YEAR - 1, 0, 1);
