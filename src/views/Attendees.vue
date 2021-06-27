<template>
	<div class="mt-4">
		<h2 class="text-center">List of Event attendees</h2>
		<div v-if="attendees.length > 0" class="row">
			<div
				v-for="(attendee, index) in attendees"
				:key="index"
				class="col-3 mb-2"
			>
				<b-card>
					<p>Name:{{ attendee.name }}</p>
					<p>Email: {{ attendee.email }}</p>
					<p>Person ID: {{ attendee.personID }}</p>
					<p>Position: {{ attendee.position }}</p>
				</b-card>
			</div>
		</div>
		<div v-else class="text-center">
			<p>Please Sign In to see the list of attendees</p>
			<router-link to="/signin">
				<b-button variant="primary">Sign In</b-button>
			</router-link>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "Attendees",
	components: {},
	data() {
		return {
			attendees: [],
			eventID: 71999,
			tokenID: "",
		};
	},
	async mounted() {
		await this.fetchAttendees();
	},
	methods: {
		async fetchAttendees() {
			let token = localStorage.getItem("TokenID");

			if (token) {
				this.tokenID = token;

				try {
					const response = await axios.get(
						`https://app.inevent.com/api/?action=event.person.find&tokenID=${this.tokenID}&eventID=${this.eventID}&selection=all`
					);

					console.log("the response", response);

					if (response && response.data) {
						console.log("data", response.data);
						this.attendees = response.data;
					}
				} catch (error) {
					console.log(error);
				}
			}
		},
	},
};
</script>

<style></style>
