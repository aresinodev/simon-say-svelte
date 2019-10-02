<script>
    import { _ } from 'svelte-i18n';
</script>

<style>
    .header-content-logo {}

    .header-content-title {
        padding-left: 1em;
    }
</style>

<div class="flex flex-row justify-center items-center w-full p-2">
    <div class="header-content-logo">
        <img src="assets/images/simon-say-icon.png" alt="simon-say-icon"
             class="w-20 sm:w-20 md:w-40 xl:w-80" />
    </div>
    <div class="header-content-title flex flex-row justify-center w-full"
         style="padding-left: 1em;">
        <h1 class="text-sm sm:text-sm md:text-3xl xl:text-6xl"
            style="font-family: 'Press Start 2P', sans-serif, Arial;">
            { $_('header.title') }
        </h1>
    </div>
</div>