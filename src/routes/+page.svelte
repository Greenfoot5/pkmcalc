<script>
	import { siteTitle } from '$lib/config';
	import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<Header />
<div class="content">
	<a href="skills">Skill Calculator</a><br />
<!--	<a href="old-skills2.html">Skill Calculator V2 - in active development so this may be very unstable if available at all!</a><br />-->
</div>


