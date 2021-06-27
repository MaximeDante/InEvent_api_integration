<template>
	<div
		style="min-height: 100vh"
		class="d-flex flex-column justify-content-center align-items-center"
	>
      <b-col sm="6" md="5" lg="4" xl="3">
		<b-card>
			<h1 class="text-center">Welcome Back</h1>
			<b-form @submit.prevent="login">
				<b-form-group id="input-group-1" label="Username" label-for="input-1">
					<b-form-input
						id="input-1"
						v-model="form.username"
						type="text"
						placeholder="Username"
						required
					></b-form-input>
				</b-form-group>

				<b-form-group id="input-group-2" label="Password" label-for="input-2">
					<b-form-input
						id="input-2"
						v-model="form.password"
						placeholder="Password"
						type="password"
						required
					></b-form-input>
				</b-form-group>
				<b-button class="mt-2" type="submit" variant="primary">Login</b-button>
			</b-form>
		</b-card>
      </b-col>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "SignIn",
	components: {},
	data() {
		return {
			form: {
				username: "",
				password: "",
			},
		};
	},
	methods: {
		async login() {
			let username = `${this.form.username}`;
			let password = `${this.form.password}`;


			const config = {
                crossDomain: true,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
				},
				withCredentials: true,
			};

			try {
				const response = await axios.post(
					`https://app.inevent.com/api/?action=person.signIn&username=${username}&password=${password}`,
					config
				);

				if (response && response.data) {
					console.log("data", response.data);
					let data = response.data[0];
					if (data) {
						let token = data.tokenID;
						localStorage.setItem("TokenID", token);
					}
                
                    this.$router.push('/attendees/')
				}
			} catch (error) {
				console.log("the error", error);
			}
		},
	},
};
</script>

<style></style>
