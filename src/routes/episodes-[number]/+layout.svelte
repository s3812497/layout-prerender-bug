<script lang="ts">
    import type { LayoutData } from './$types'
    export let data: LayoutData

</script>

<h1>Pre-rendered Episode #{data.number} - {data.episode.title}</h1>
<nav>
    <a href="/episodes-{data.number}">Episode Home Page</a> | 
    <a href="/episodes-{data.number}/gallery">Episode #{data.number} Gallery</a>
</nav>
<hr>
<slot></slot>

<style>

</style>