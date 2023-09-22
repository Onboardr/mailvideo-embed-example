<script lang="ts">
	import { getMailVideoOptions } from '$lib/utils';
	import { loadMailVideo, type PickVideoResponse } from '@mailvideo/embed';

	let response: PickVideoResponse | undefined;

	const pickVideo = async () => {
		console.log('pickVideo');
		const mailvideo = await loadMailVideo(getMailVideoOptions());
		[response] = await mailvideo.pickVideo();
		console.log('pickVideo:response', response);
	};

	const openPlatform = async () => {
		console.log('openPlatform');
		const mailvideo = await loadMailVideo(getMailVideoOptions());
		await mailvideo.openPlatform();
	};

	const openVideo = async () => {
		console.log('openVideo');
		if (!response) {
			return;
		}
		const mailvideo = await loadMailVideo(getMailVideoOptions());
		await mailvideo.openVideo({ videoId: response.id });
	};

	const openAssociationLibrary = async () => {
		console.log('openAssociationLibrary');
		const mailvideo = await loadMailVideo(getMailVideoOptions());
		await mailvideo.openPlatform({
			company: {
				id: 1,
				name: 'Test Company',
			},
		});
	};
</script>

<button on:click={pickVideo}>PickVideo</button>
<button on:click={openPlatform}>Open Platform</button>
<button on:click={openAssociationLibrary}>Open Association Library</button>

{#if response}
	<button on:click={openVideo}>Open Video</button>
{/if}

{#if response}
	<pre>{JSON.stringify(response, null, 2)}</pre>
{/if}
