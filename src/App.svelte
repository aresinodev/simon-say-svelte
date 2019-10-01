<script>
	import { locale, _ } from 'svelte-i18n';

	export let name;
</script>

<style>

</style>

<button class="bg-blue-500 hover:bg-blue-700">{ $_('test') }</button>
