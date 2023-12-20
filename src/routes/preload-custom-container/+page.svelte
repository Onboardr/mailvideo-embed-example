<script lang="ts">
	import {
		loadMailVideo,
		type MailVideoEmbedInterface,
		type PickVideoResponse,
	} from '@mailvideo/embed';
	import { getMailVideoOptions } from '$lib/utils';
	import ResponseView from '$lib/ResponseView.svelte';
	import { onMount } from 'svelte';

	let mailvideo: MailVideoEmbedInterface | undefined;
	let customContainer: HTMLDivElement;
	let response: PickVideoResponse | undefined;

	onMount(async () => {
		mailvideo = await loadMailVideo({
			...getMailVideoOptions(),
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
