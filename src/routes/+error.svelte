<script lang="ts">
    import {page} from '$app/stores'
</script>

<section class="error">
{ #if $page.status === 500}
<article>
    <h1>Erro 500</h1>
    <p>Ocorreu um erro em nosso servidor</p>
</article>
    
{/if}
{ #if $page.status === 404}
<article>
    <h1>Erro 404</h1>
    <p>A pagina que você esta não existe</p>
</article>
{/if}
</section>

<style>
    .error {
        margin-top: 3em;
    }
</style>
