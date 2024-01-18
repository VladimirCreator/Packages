/* This file is created at 1:46 PM...1:51 PM on Mon 15 Jan 2024.
*/
type Letter = {
	id: string
	content: string
	author: string
	date: string

	attachments: {
		type: 'img'|'video'
		url: string
	}[]
}
