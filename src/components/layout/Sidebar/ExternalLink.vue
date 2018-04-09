<template>
	<li :class="menuItem.classes">
		<a :href="menuItem.url" target="_blank">
			<FontAwesomeIcon v-if="menuItem.icon" :icon="menuItem.icon" fixed-width />
			<span>{{menuItem.text}}</span>

			<div class="pull-right-container">
				<FontAwesomeIcon icon="external-link-alt" transform="shrink-2" class="pull-right" />
			</div>
		</a>
	</li>
</template>

<script>
export default {
	name: 'ExternalLink',

	props: [
		'menuItem',
	],
};
</script>
