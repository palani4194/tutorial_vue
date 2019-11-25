<template>
  <div class="header">

    <slot name="slottag"></slot>
    <div id="form-controls">
      <slot name="form-controls"></slot>
    </div>

    <div id="form-fields">
      <slot name="form-fields"></slot>
    </div>


  </div>
</template>

<script>

export default {
  name: 'FormSlot',
  props:{
  },
  data() {
    return{
    }
  },
  methods:{


  }
}

</script>

<style scoped>


</style>
