<script lang="ts">
	import { loadMailVideo, type PickVideoResponse } from '@mailvideo/embed';
	import { getMailVideoOptions } from '$lib/utils';
	import ResponseView from '$lib/ResponseView.svelte';

	let customContainer: HTMLDivElement;
	let response: PickVideoResponse | undefined;

	const openIframe = async () => {
		const mailvideo = await loadMailVideo(getMailVideoOptions());

		[response] = await mailvideo.pickVideo({
			divElement: customContainer,
		});
	};
</script>

<button on:click={openIframe}>Open MailVideo</button>

<div
	bind:this={customContainer}
	style="width: 100%; height: 500px; border: 1px solid black; margin-top: 20px; margin-bottom: 20px;" />

{#if response}
	<ResponseView response={response} />
{/if}
