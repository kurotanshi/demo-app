import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currCity: '臺北市',
    currDistrict: '北投區',
    location: [],
    stores: [],
    keyword: '',
    showModal: false,
    infoBoxSid: null,
  },
  mutations: {
    setcurrCity(state, payload) {
      state.currCity = payload;
    },
    setcurrDistrict(state, payload) {
      state.currDistrict = payload;
    },
    setAreaLocation(state, payload) {
      state.location = payload;
    },
    setStores(state, payload) {
      state.stores = payload;
    },
    setKeyword(state, payload) {
      state.keyword = payload;
    },
    setShowModal(state, payload) {
      state.showModal = payload;
    },
    setInfoBoxSid(state, payload) {
      state.infoBoxSid = payload;
    },
  },
  actions: {
    async fetchLocations({ commit }) {
      // 取得行政區資料
      const json = await fetch('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json')
        .then((res) => res.json());

      // 透過 commit 來操作 mutations
      commit('setAreaLocation', json);
    },
    async fetchPharmacies({ commit }) {
      // 取得藥局資料
      const json = await fetch('https://kiang.github.io/pharmacies/json/points.json')
        .then((res) => res.json());

      const data = json.features.map((d) => ({
        ...d.properties,
        latitude: d.geometry.coordinates[0],
        longitude: d.geometry.coordinates[1],
      }));

      // 透過 commit 來操作 mutations
      commit('setStores', data);
    },
  },
  getters: {
    cityList(state) {
      return state.location.map((d) => d.name);
    },
    districtList(state) {
      return state.location.find((d) => d.name === state.currCity)?.districts;
    },
    filteredStores(state) {
      return (state.keyword)
        ? state.stores.filter((d) => d.name.includes(state.keyword))
        : state.stores.filter((d) => d.county === state.currCity && d.town === state.currDistrict);
    },
    currDistrictInfo(state, getters) {
      // 目前所選行政區資訊
      return (getters.districtList)
        ? getters.districtList.find((d) => d.name === state.currDistrict)
        : {};
    },
  },
  modules: {
  },
});
