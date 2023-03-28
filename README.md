# @mailvideo/embed Example

This is an example of how to use the [@mailvideo/embed](https://www.npmjs.com/package/@mailvideo/embed) package.

To see the example in action, go to the code [codesandbox](https://codesandbox.io/s/github/mailvideo/embed/tree/master/example).

## Setup

Add the publishableKey, tenantId and accountId at the end of the url:

```
?publishableKey={your-mailvideo-key}&tenantId={tenant-id}&accountId={account-id}
```

### Check the different use cases:

-   `/` the root route is to load the iframe as a dialog
-   `/preload` preloads the iframe as a dialog when the page is loaded.
-   `/custom-container` opens the iframe in a custom div element.
-   `/preload-custom-container` preloads the iframe in a custom div element when the page is loaded.

## To understand the code

Go to:
`src/routes/+page.svelte`
to understand the code.
