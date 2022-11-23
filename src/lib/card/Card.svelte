<script lang="ts">
    import Trator from '$lib/svgs/trator.svelte';
    import Shield from '$lib/svgs/shield.svelte';
    import Speed from '$lib/svgs/speed.svelte';
    export let icon: string;
    export let title: string;
    export let description: string;
</script>

<div class="card">
    <div class="container">
        { #if icon === "trator"}
            <Trator />
        {/if}
        { #if icon === "shield"}
            <Shield />        
        {/if}
        { #if icon === "speed"}
            <Speed />
        {/if}
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>

<style lang="scss">
    .card {
        max-width: 202px;
        min-height: 230px;
        background-color: #E2F2F6;
        border-radius: 1em;
        margin-bottom: 2.5em;
        box-shadow: 0px 10px 25px rgba(21, 133, 220, 0.34);
        transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
        z-index: 5;
        &:hover {
            z-index: 0;
            transform: scale(.95);
        }
        .container {
            padding: 1em 1.30em;

            h3 {
                font-size: 0.875rem;
            }
            p {
                margin-top: 2em;
                font-size: 0.688rem;
            }
        }
    }
</style>