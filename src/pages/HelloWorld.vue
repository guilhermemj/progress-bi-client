<template>
	<MainLayout page-class="hello-world" page-title="Hello World!" page-description="This is a simple Vue page">
		<div class="hello">
			<img src="@/assets/images/logo.png">

			<h1>
				{{ msg }}

				<FontAwesomeLayers>
					<FontAwesomeIcon icon="globe" spin class="text-success" />
					<FontAwesomeIcon icon="rocket" transform="shrink-5 up-5 right-5" />
				</FontAwesomeLayers>
			</h1>

			<h2>Essential Links</h2>

			<ul>
				<li>
					<a href="https://vuejs.org" target="_blank" >
						Core Docs
					</a>
				</li>

				<li>
					<a href="https://forum.vuejs.org" target="_blank" >
						Forum
					</a>
				</li>

				<li>
					<a href="https://chat.vuejs.org" target="_blank" >
						Community Chat
					</a>
				</li>

				<li>
					<a href="https://twitter.com/vuejs" target="_blank" >
						Twitter
					</a>
				</li>

				<br>

				<li>
					<a href="http://vuejs-templates.github.io/webpack/" target="_blank" >
						Docs for This Template
					</a>
				</li>
			</ul>

			<h2>Ecosystem</h2>

			<ul>
				<li>
					<a href="http://router.vuejs.org/" target="_blank" >
						vue-router
					</a>
				</li>

				<li>
					<a href="http://vuex.vuejs.org/" target="_blank" >
						vuex
					</a>
				</li>

				<li>
					<a href="http://vue-loader.vuejs.org/" target="_blank" >
						vue-loader
					</a>
				</li>

				<li>
					<a href="https://github.com/vuejs/awesome-vue" target="_blank" >
						awesome-vue
					</a>
				</li>
			</ul>
		</div>
	</MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';

export default {
	name: 'HelloWorld',

	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},

	components: {
		MainLayout,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	text-align: center;
}

h1,
h2 {
	font-weight: normal;
	color: #34495e;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

.text-success,
a {
	color: #42b983;
}
</style>
