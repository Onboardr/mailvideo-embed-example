<script lang="ts">
	import { loadMailVideo, type InsertVideoResponse } from '@mailvideo/embed';
	import { getMailVideoOptions } from '$lib/utils';
	import ResponseView from '$lib/ResponseView.svelte';

	let response: InsertVideoResponse | undefined;

	const openIframe = async () => {
		const { publishableKey, tenantId, accountId } = getMailVideoOptions();
		const mailvideo = await loadMailVideo({
			publishableKey,
			tenantId,
			accountId,
		});

		response = await mailvideo.insertVideo();
	};
</script>

<button on:click={openIframe}>Open MailVideo</button>

{#if response}
	<ResponseView response={response} />
{/if}
