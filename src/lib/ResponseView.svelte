<script lang="ts">
	import type { InsertVideoResponse } from '@mailvideo/embed';
	export let response: InsertVideoResponse;
</script>

<p>{response.title}</p>

<p>{response.link}</p>

<div style="width: 560px; height: 315px;">
	{@html response.embedCode}
</div>

<div style="width: 560px; height: 315px;">
	{@html response.emailHTMLCode}
</div>

<pre>{JSON.stringify(response, null, 2)}</pre>
