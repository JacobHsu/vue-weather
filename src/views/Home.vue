<template>
  <div class="home">
    <h2 v-for="item in getWeatherItem" :key="item.locationName">
      {{ item.locationName }} : {{ item.weatherElement[0].time[0].parameter.parameterName}}
    </h2>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  // components: {
  //   HelloWorld,
  // },
  watch: {
    errorTrigger(status) {
      if (!status) return;
      // 如果頁面上有錯誤，導去錯誤處理頁
      // this.$router.push("/error");
    },
  },
  computed: {
    ...mapState(['errorTrigger']),
    ...mapGetters(['getWeatherItem']),
  },
  methods: {
    ...mapActions(['getWeatherData']),
  },
  mounted() {
    // console.log(this.errorTrigger) // false
    this.getWeatherData();
    // console.log(this.getWeatherItem); // mapGetters(['getWeatherItem'])
  },
};
</script>
