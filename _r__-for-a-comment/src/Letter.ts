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
