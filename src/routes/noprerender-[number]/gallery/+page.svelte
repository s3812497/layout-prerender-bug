<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData
</script>

    <h2>Gallery for episode #{data.number}</h2> 

    {#each data.gallery as item}
        <div>
            <img src="{item.url}" alt="{item.title}" />
        </div>
    {/each}
<style>
img {
    width: 300px;
    height: 300px;
    margin: 1rem;
}
</style>