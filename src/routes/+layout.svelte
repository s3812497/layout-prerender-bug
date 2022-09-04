<script lang="ts">
    import { page } from "$app/stores"
</script>
<main>
    <div>
        <header>
            menu
        </header>
        <nav>
            <a href="/">- home page</a><br/>
            <a href="https://github.com/StephenGunn/layoutprerender" target="_blank">- https://github.com/StephenGunn/layoutprerender</a><br/>
        </nav>
        <h2>
            +layout.server.ts "prerender = true"
        </h2>
        <ul>
            {#each Array(5) as episode, index}
                <li>
                    <a href="/episodes-{index+1}">Episode #{index+1}</a>
                </li>
            {/each}
        </ul>
        <hr>
        <h2>
            +layout.server.ts "prerender not set"
        </h2>
        <ul>
            {#each Array(5) as episode, index}
                <li>
                    <a href="/noprerender-{index+1}">No Prerender Episode #{index+1}</a>
                </li>
            {/each}
        </ul>
        <hr>
        <h2>
            +page.server.ts "prerender not set"
        </h2>
        <p>
            no /+layout.server.ts involved in this route
        </p>
        <ul>
            {#each Array(5) as episode, index}
                <li>
                    <a href="/nolayout-{index+1}">No Layout Episode #{index+1}</a>
                </li>
            {/each}
        </ul>
    </div>
    <div>
        <header>{$page.url.pathname}</header>
        <slot></slot>
    </div>
</main>

<style>
    main {
        padding: 1rem;
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    main > div {
        padding: 1rem;
        border: 1px solid #eee;
        width: 50%;
    }
    main > div > header {
        border: 1px solid #eee;
        padding: 1rem;
        position: relative;
        top: -2.5rem;
        background: white
    }
</style>
