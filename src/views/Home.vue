<template>
	<div
		style="min-height: 100vh"
		class="d-flex flex-column justify-content-center align-items-center"
	>
		<div class="text-center">
			<img
                style="width: 10%;"
				src="@/assets/Dantelogo.png"
				fluid
				alt="Responsive image"
			/>
		</div>
		<div>
			<h1>Welcome! Please Sign In to view the list of attendees.</h1>
		</div>
		<div>
			<router-link to="/signin">
				<b-button variant="primary">Sign In</b-button>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	components: {},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style></style>
