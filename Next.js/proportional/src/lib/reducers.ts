// Tue 11 Jul 2023 12:16 AM

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
