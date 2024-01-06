export class User {
	savedName = ''; savedPassword = ''

	constructor(plain) {
		this.savedName = plain.savedName; this.savedPassword = plain.savedPassword
	}
}
