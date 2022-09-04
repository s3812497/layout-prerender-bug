<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData

</script>

<h1>Dynamic Test Episode #{data.number} - {data.episode.title} -  No /+layout.server.ts used</h1>
<nav>
    <a href="/nolayout-{data.number}">Episode Home Page</a> | 
    <a href="/nolayout-{data.number}/gallery">Episode #{data.number} Gallery</a>
</nav>
<hr>
<h2>Welcome to the index of episode #{data.number}</h2>

{@html data.episode.body}
