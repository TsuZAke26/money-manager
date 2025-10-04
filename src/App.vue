<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
	<div class="p-4 mx-auto">
		<div
			class="grid content-center h-screen grid-cols-1 gap-4 justify-items-center"
		>
			<!-- Proof that TailwindCSS is setup correctly -->
			<h1 class="text-3xl font-bold underline">Hello world!</h1>

			<!-- Proof that PrimeVue is setup correctly -->
			<Button>I'm a PrimeVue Button!</Button>
		</div>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
