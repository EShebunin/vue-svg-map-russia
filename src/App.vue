<template>
  <div class="v-map">
    <svg-map class="v-map__map">
      <region-path
        class="v-map__region"
        v-for="(region, index) in regions"
        :key="index"
        :index="index"
        :region="region"
        @hover:region="regionHover"
        @leave:region="regionLeave"
      />
    </svg-map>

    <div
      ref="tooltip"
      v-if="visibleTooltip"
      class="v-map__tooltip"
      :style="computedStyle"
    >
      {{ regionName }}
    </div>
  </div>
</template>

<script>
import SvgMap from './SvgMap.vue';
import RegionPath from './RegionPath.vue';
import { getDataForMap } from './api';

export default {
  name: 'App',

  components: { SvgMap, RegionPath },

  data() {
    return {
      title: '',
      regions: [],
      computedStyle: {},
      regionName: undefined,
      visibleTooltip: false,
    };
  },

  methods: {
    async regionHover(value) {
      const { target, name } = value;

      this.regionName = name;
      this.visibleTooltip = true;

      await this.$nextTick();

      const { offsetWidth } = this.$refs.tooltip;

      const { x, y, width, height, top, left } = target.getBoundingClientRect();

      this.computedStyle = {
        top: `${(y || top) + height / 2}px`,
        left: `${(x || left) + width / 2 - offsetWidth / 2}px`,
      };
    },

    regionLeave() {
      this.visibleTooltip = false;
    },
  },

  mounted() {
    this.regions = getDataForMap();
  },
};
</script>


<style lang="scss">
.v-map {
  position: relative;
  height: 500px;
  overflow: hidden;
  outline: none;

  &__map {
    width: 100%;
    height: 100%;
  }

  &__region {
    cursor: pointer;
    stroke: #ffffff;
    fill: #d8d8dc;

    &:hover {
      fill: #3662ff;
    }
  }

  &__tooltip {
    position: absolute;
    font-size: 16px;
    font-weight: 700;
    background-color: #fff;
    color: #003188;
    padding: 8px 15px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
}
</style>