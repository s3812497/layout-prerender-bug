<script lang="ts">
    import type { LayoutData } from './$types'
    export let data: LayoutData

</script>

<h1>Dynamic Test Episode #{data.number} - {data.episode.title} -  pre-render not set at +layout level</h1>
<nav>
    <a href="/noprerender-{data.number}">Episode Home Page</a> | 
    <a href="/noprerender-{data.number}/gallery">Episode #{data.number} Gallery</a>
</nav>
<hr>
<slot></slot>