export default {
	// Using fake tokens when ENV vars aren't set so that it doesn't throw and we get logging to the console instead.
	access: {
		token: process.env.LOGENTRIES_ACCESS_TOKEN || 'aaaaaaaa-1111-1111-1111-aaaaaaaaaaaa',
	},
	app: {
		token: process.env.LOGENTRIES_APP_TOKEN || 'aaaaaaaa-1111-1111-1111-aaaaaaaaaaaa',
	},
};
