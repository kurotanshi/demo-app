<template>
  <!-- aside-menu 左側欄 -->
  <div class="aside-menu">
    <div class="wraps">
      <label>
        縣市：
        <select v-model="currCity">
          <option v-for="c in cityList" :key="c">{{ c }}</option>
        </select>
      </label>
      <label>
        行政區：
        <select v-model="currDistrict">
          <option v-for="d in districtList" :key="d.id">{{ d.name }}</option>
        </select>
      </label>
    </div>

    <div class="wraps">
      <label>
        <i class="fas fa-search-location"></i> 關鍵字搜尋：
        <input v-model="keyword" type="text" placeholder="請輸入關鍵字">
      </label>
    </div>

    <ul class="store-lists">

      <li class="store-info wraps" v-for="s in stores" :key="s.id"
        @click.prevent="$emit('triggerMarkerPopup', s.id)">

        <h1 v-html="keywordHighlight(s.name)"></h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: {{ s.mask_adult }} 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: {{ s.mask_child }} 個</span>
        </div>

        <div class="mask-info">
          最後更新時間: {{ s.updated }}
        </div>

        <button class="btn-store-detail" @click="openBox(s.id)">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'asideMenu',
  watch: {
    districtList(list) {
      const [arr] = list;
      this.currDistrict = arr.name;
    },
  },
  computed: {
    currCity: {
      get() {
        return this.$store.state.currCity;
      },
      set(value) {
        this.$store.commit('setcurrCity', value);
      },
    },
    currDistrict: {
      get() {
        return this.$store.state.currDistrict;
      },
      set(value) {
        this.$store.commit('setcurrDistrict', value);
      },
    },
    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(value) {
        this.$store.commit('setKeyword', value);
      },
    },
    showModal: {
      get() {
        return this.$store.state.showModal;
      },
      set(value) {
        this.$store.commit('setShowModal', value);
      },
    },
    infoBoxSid: {
      get() {
        return this.$store.state.infoBoxSid;
      },
      set(value) {
        this.$store.commit('setInfoBoxSid', value);
      },
    },
    cityList() {
      return this.$store.getters.cityList;
    },
    districtList() {
      return this.$store.getters.districtList;
    },
    stores() {
      return this.$store.getters.filteredStores;
    },
  },
  methods: {
    openBox(sid) {
      this.infoBoxSid = sid;
      this.showModal = true;
    },
    keywordHighlight(val) {
      return val.replace(new RegExp(this.keyword, 'g'),
        `<span class="highlight">${this.keyword}</span>`);
    },
  },
};
</script>

<style>
.highlight{
  color: #f00;
}
</style>
