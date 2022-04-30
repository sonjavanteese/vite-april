export const copyToClipboard = (text) =>
	new Promise((resolve) =>
		navigator.clipboard
			.writeText(text)
			.then(() => setTimeout(() => resolve(true), 1000))
			.catch(() => alert('Clipboard copy Permission denied'))
	);
