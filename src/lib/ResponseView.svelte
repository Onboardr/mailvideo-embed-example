<script lang="ts">
	import type { InsertVideoResponse } from '@mailvideo/embed';
	export let response: InsertVideoResponse;
</script>

<p>{response.videoTitle}</p>

<p>{response.videoLink}</p>

<div style="width: 560px; height: 315px;">
	{@html response.videoEmbedCode}
</div>

<div style="width: 560px; height: 315px;">
	{@html response.videoEmailHTMLCode}
</div>
