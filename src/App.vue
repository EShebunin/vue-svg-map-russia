<template>
  <svg-map>
    <region-path />
  </svg-map>
</template>

<script>
import SvgMap from './SvgMap.vue';
import RegionPath from './RegionPath.vue';

export default {
  name: 'App',

  components: { SvgMap, RegionPath },

  data() {
    return {
      title: '',
      regions: undefined,
      dataRegion: undefined,
    };
  },
};
</script>