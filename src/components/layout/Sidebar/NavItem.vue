<template>
	<NavNode :menuItem="menuItem" v-if="this.hasSubmenu" />

	<ExternalLink :menuItem="menuItem" v-else-if="this.isExternalLink" />

	<InternalLink :menuItem="menuItem" v-else />
</template>

<script>
import NavNode      from './NavNode';
import ExternalLink from './ExternalLink';
import InternalLink from './InternalLink';

export default {
	name: 'NavItem',

	components: {
		NavNode,
		ExternalLink,
		InternalLink,
	},

	props: [
		'menuItem',
	],

	computed: {
		hasSubmenu() {
			return !!this.menuItem.submenu;
		},

		isExternalLink() {
			return (/^(https?:)?\/\//).test(this.menuItem.url);
		},
	},
};
</script>
