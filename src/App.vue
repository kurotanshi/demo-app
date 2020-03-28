<template>
  <div id="app">
    <asideMenu @triggerMarkerPopup="openPopup" />
    <maskMap ref="map" />
    <lightBox />
  </div>
</template>

<script>
import asideMenu from './components/asideMenu.vue';
import lightBox from './components/lightbox.vue';
import maskMap from './components/map.vue';

export default {
  name: 'App',
  components: {
    asideMenu,
    lightBox,
    maskMap,
  },
  methods: {
    openPopup(markerId) {
      this.$refs.map.triggerPopup(markerId);
    },
  },
  mounted() {
    this.$store.dispatch('fetchLocations');
    this.$store.dispatch('fetchPharmacies');
  },
};
</script>

<style lang="scss" src="./style.scss"></style>
