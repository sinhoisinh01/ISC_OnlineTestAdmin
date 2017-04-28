/*
 * Author: Doan Phuc Sinh
 * Description: check password strength. A Strong password must be:
 * 	+ at least 6 characters
 *	+ contain Lower and Upper case letter
 *	+ at least 1 number
 *	+ at least 1 special character
 * Params: 
 * @password - string: Password need to check
 */
function isStrongPassword(password) {
	strongPasswordPattern = /((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&%]).{6,})/;
	return strongPasswordPattern.test(password);
}

/*
 * Author: Doan Phuc Sinh
 * Description: convert JS Date to SQL Date Object
 * Params: 
 * @date - Date: date need to convert
 * Return: Long number
 */
function convertToSqlDate(date) {
	return date.toISOString().slice(0, 19).replace('T', ' ');;
}