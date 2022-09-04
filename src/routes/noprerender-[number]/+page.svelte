<script lang="ts">
    import type { PageData } from './$types'
    export let data: PageData
</script>

    <h2>Welcome to the index of episode #{data.number}</h2>

    {@html data.episode.body}
