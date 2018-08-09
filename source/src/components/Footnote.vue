<template>
  <el-popover>
    <el-button slot="reference" type="primary">{{id}}</el-button>
    <slot />
  </el-popover>
</template>

<script>

let id = 1

export function nextId () {
  return id++
}

export function resetId () {
  id = 1
}

export default {
  name: 'Footnote',
  data () {
    return {
      id: nextId()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~element-ui/packages/theme-chalk/src/mixins/mixins";
@import "~element-ui/packages/theme-chalk/src/common/var";

@include b(button) {
  padding: 2px $--badge-padding;
  border-radius: $--badge-radius;
  font-family: inherit;
  font-size: $--badge-font-size;
  font-weight: normal;
  vertical-align: super;
}

</style>
