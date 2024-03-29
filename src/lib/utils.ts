/**
 * Get the options from the URL query parameters
 */
export const getMailVideoOptions = (): {
	publishableKey: string;
	tenantId: string | number;
	accountId: string | number;
	type: 'crm';
} => {
	const searchParams = new URLSearchParams(window.location.search);
	const publishableKey = searchParams.get('publishableKey');
	const tenantId = convertValue(searchParams.get('tenantId'));
	const accountId = convertValue(searchParams.get('accountId'));

	if (!publishableKey || !tenantId || !accountId) {
		alert(
			'Missing required search parameters: publishableKey, tenantId, accountId',
		);
		throw new Error(
			'Missing required search parameters: publishableKey, tenantId, accountId',
		);
	}

	return {
		publishableKey,
		tenantId,
		accountId,
		type: 'crm',
	};
};

export const convertValue = (value: string | null) => {
	if (!value) {
		return;
	}
	const numberValue = Number(value);
	if (!isNaN(numberValue)) {
		return numberValue;
	}
	return value;
};
