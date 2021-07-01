<template>
  <g>
    <path
      :index="index"
      :d="region.path"
      @mouseover="mouseOverHandler"
      @mouseleave="mouseLeaveHandler"
    />
  </g>
</template>

<script>
export default {
  name: 'RegionPath',

  props: {
    index: { type: Number, required: true },
    region: { type: Object, required: true },
  },

  methods: {
    mouseOverHandler({ target }) {
      this.$emit('hover:region', { target, name: this.region.name });
    },

    mouseLeaveHandler() {
      this.$emit('leave:region');
    },
  },
};
</script>
