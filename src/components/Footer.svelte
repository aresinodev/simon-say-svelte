<script>
    import { _ } from 'svelte-i18n';

    let year = new Date().getFullYear();
</script>

<style>
    .text-footer {
        font-family: 'Press Start 2P', sans-serif;
    }
</style>

<div class="flex flex-row justify-center items-center w-full"
     style="position: fixed; bottom: 0;padding: 1em;">
    <span class="text-footer text-2xs sm:text-2xs md:text-2xl"
          style="font-family: 'Press Start 2P', sans-serif;">
        { `${ $_('footer.design') } Aarón RJ @ ${ year }` }
    </span>
</div>