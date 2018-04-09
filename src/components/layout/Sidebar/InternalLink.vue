<template>
	<router-link tag="li" active-class="active" :class="menuItem.classes" :to="menuItem.url" exact>
		<a>
			<FontAwesomeIcon v-if="menuItem.icon" :icon="menuItem.icon" fixed-width />
			<span>{{menuItem.text}}</span>
		</a>
	</router-link>
</template>

<script>
export default {
	name: 'InternalLink',

	props: [
		'menuItem',
	],
};
</script>
