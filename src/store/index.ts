import { createStore } from 'vuex'

export default createStore({
	state: {
		id: false,
		integral:0,
		Teamrewards:0,
		userid:null,
		collectiontime:0,
		count:0

	},
	mutations: {
		setId(state, value) {
			state.id = value
		},
		setIntegral(state, value) {
			state.integral = value
		},
		setUserid(state, value) {
			state.userid = value
		},
		setTeamrewards(state, value) {
			state.Teamrewards = value
		},
		setCollectiontime(state, value) {
			state.collectiontime = value
		},
		setCount(state, value) {
			state.count = value
		},

	},
	getters: {},
	actions: {},
	modules: {},
})