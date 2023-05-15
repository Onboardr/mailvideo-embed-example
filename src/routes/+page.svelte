<script lang="ts">
	import { loadMailVideo, type PickVideoResponse } from '@mailvideo/embed';
	import { convertValue, getMailVideoOptions } from '$lib/utils';
	import ResponseView from '$lib/ResponseView.svelte';

	let response: PickVideoResponse | undefined;

	const pickVideo = async () => {
		console.log('pickVideo');
		const { publishableKey, tenantId, accountId } = getMailVideoOptions();
		const mailvideo = await loadMailVideo({
			publishableKey,
			tenantId,
			accountId,
		});
		const [video] = await mailvideo.pickVideo();
		response = video;
		console.log('pickVideo:response', response);
	};

	const openPlatform = async () => {
		console.log('openPlatform');
		const { publishableKey, tenantId, accountId } = getMailVideoOptions();
		const mailvideo = await loadMailVideo({
			publishableKey,
			tenantId,
			accountId,
		});
		await mailvideo.openPlatform();
	};

	const openVideo = async () => {
		console.log('openVideo');
		if (!response) {
			return;
		}
		const { publishableKey, tenantId, accountId } = getMailVideoOptions();
		const mailvideo = await loadMailVideo({
			publishableKey,
			tenantId,
			accountId,
		});
		await mailvideo.openVideo({ videoId: response.id });
	};

	const openAssociationLibrary = async () => {
		console.log('openAssociationLibrary');
		const { publishableKey, tenantId, accountId } = getMailVideoOptions();
		const mailvideo = await loadMailVideo({
			publishableKey,
			tenantId,
			accountId,
		});
		const searchParams = new URLSearchParams(window.location.search);

		const companyId = convertValue(searchParams.get('companyId'));
		const companyName = convertValue(searchParams.get('companyName')) as
			| string
			| undefined;

		const personId = convertValue(searchParams.get('personId'));
		const personName = convertValue(searchParams.get('personName')) as
			| string
			| undefined;
		const company =
			companyId && companyName
				? {
						id: companyId,
						name: companyName,
				  }
				: undefined;
		const person =
			personId && personName
				? {
						id: personId,
						name: personName,
				  }
				: undefined;
		if (!person && !company) {
			return alert(
				'companyId, companyName, personId, personName are required',
			);
		}

		return mailvideo.openPlatform({
			company,
			person,
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
	<ResponseView response={response} />
{/if}
