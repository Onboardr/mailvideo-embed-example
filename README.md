# @mailvideo/embed Example

This is an example of how to use the [@mailvideo/embed](https://www.npmjs.com/package/@mailvideo/embed) package.

To see the example in action, go to the code [codesandbox](https://codesandbox.io/p/github/Onboardr/mailvideo-embed-example/master?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfrmaaff0002g0hxbc8z7h7h%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfrmabvm0015356i75c4r21w%2522%253A%257B%2522key%2522%253A%2522clfrmabvm0015356i75c4r21w%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfrmah3w0078356ikppdvp7r%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfrmafnd004n356ihigr96sy%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfrmabvm0015356i75c4r21w%2522%252C%2522spacesOrder%2522%253A%255B%2522clfrmabvm0015356i75c4r21w%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D).

## Setup

Add the publishableKey, tenantId and accountId at the end of the url:

```
?publishableKey={your-mailvideo-key}&tenantId={tenant-id}&accountId={account-id}
```
![image](https://user-images.githubusercontent.com/81168925/228109783-f5397e5c-3c2c-4862-9f3d-41801fb96ef9.png)


### Check the different use cases:

-   `/` the root route is to load the iframe as a dialog
-   `/preload` preloads the iframe as a dialog when the page is loaded.
-   `/custom-container` opens the iframe in a custom div element.
-   `/preload-custom-container` preloads the iframe in a custom div element when the page is loaded.

## To understand the code

Go to:
`src/routes/+page.svelte`
to understand the code.
