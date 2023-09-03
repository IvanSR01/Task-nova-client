export const useError = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data === 'object'
			? error.response.data.message
			: error.response.data.message[0]
		: error.message
