<template>
	<MainLayout page-class="import-file" page-title="Importar Dados">
		<form ref="form" @submit.prevent="sendForm">
			<input type="file" :accept="acceptedFiles.join(', ')" name="file" ref="fileInput" @change="selectFile">

			<button class="btn btn-primary" type="submit" :disabled="!selectedfile">
				Importar
			</button>
		</form>
	</MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';

export default {
	name: 'Import',

	components: {
		MainLayout,
	},

	data() {
		return {
			acceptedFiles: [
				'.csv',
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				'application/vnd.ms-excel',
			],
			selectedfile: null,
		};
	},

	methods: {
		selectFile() {
			this.selectedfile = this.$refs.fileInput.files[0];
		},

		sendForm() {
			this.$api.importSheet(new FormData(this.$refs.form));
		},
	},
};
</script>

<style>

</style>
