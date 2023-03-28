<script lang="ts">
	import {
		loadMailVideo,
		type MailVideoInterface,
		type InsertVideoResponse,
	} from '@mailvideo/embed';
	import { getMailVideoOptions } from '$lib/utils';
	import ResponseView from '$lib/ResponseView.svelte';
	import { onMount } from 'svelte';

	let mailvideo: MailVideoInterface | undefined;
	let response: InsertVideoResponse | undefined;

	onMount(async () => {
		const { publishableKey, tenantId, accountId } = getMailVideoOptions();
		mailvideo = await loadMailVideo({
			publishableKey,
			tenantId,
			accountId,
			preload: true,
		});
	});

	const openIframe = async () => {
		response = await mailvideo?.insertVideo();
	};
</script>

<button on:click={openIframe}>Open MailVideo</button>

{#if response}
	<ResponseView response={response} />
{/if}
