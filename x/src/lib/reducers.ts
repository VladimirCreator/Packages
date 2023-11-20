export function applicationReducer(
	state: { state?: string, data: any[] },
	action: any
) {
	switch (action.type) {
		case 'application/loaded':
		return { state: 'loaded', data: action.response }
	}
	return state
}
