<template>
	<ExternalLink :menuItem="menuItem" v-if="this.isExternalLink" />

	<NavNode :menuItem="menuItem" v-else-if="this.hasSubmenu" />

	<InternalLink :menuItem="menuItem" v-else />
</template>

<script>
import NavNode      from './NavNode';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

export default {
	name: 'NavItem',

	props: [
		'menuItem',
	],

	data() {
		return {
			isExternalLink: (/^(https?:)?\/\//).test(this.menuItem.url),
			hasSubmenu: !!this.menuItem.submenu,
		};
	},

	components: {
		NavNode,
		ExternalLink,
		InternalLink,
	},
};
</script>

<style>

</style>
