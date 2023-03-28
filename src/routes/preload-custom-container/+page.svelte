<script lang="ts">
	import {
		loadMailVideo,
		type MailVideoInterface,
		type PickVideoResponse,
	} from '@mailvideo/embed';
	import { getMailVideoOptions } from '$lib/utils';
	import ResponseView from '$lib/ResponseView.svelte';
	import { onMount } from 'svelte';

	let mailvideo: MailVideoInterface | undefined;
	let customContainer: HTMLDivElement;
	let response: PickVideoResponse | undefined;

	onMount(async () => {
		const { publishableKey, tenantId, accountId } = getMailVideoOptions();
		mailvideo = await loadMailVideo({
			publishableKey,
			tenantId,
			accountId,
			preload: customContainer,
		});
	});

	const openIframe = async () => {
		if (!mailvideo) {
			return;
		}
		[response] = await mailvideo.pickVideo();
	};
</script>

<button on:click={openIframe}>Open MailVideo</button>

<div
	bind:this={customContainer}
	style="width: 100%; height: 500px; border: 1px solid black; margin-top: 20px; margin-bottom: 20px;" />

{#if response}
	<ResponseView response={response} />
{/if}
