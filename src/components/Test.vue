<template>
  <div id="demo">
  <transition-group
tag="div"
class="container">
    <div
v-for="item in items"
:key="item.key"
class="item"
:style="{ background: item.color, width: '100px', height: '100px' }"
     draggable="true"
@dragstart="handleDragStart($event, item)"
@dragend="handleDragEnd($event, item)"
@dragenter="handleDragEnter($event, item)"
@dragover.prevent="handleDragOver($event, item)"
       @drop.prevent="handleDrop($event, item)">{{item.key}}</div>
  </transition-group>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      items: [
        { key: 1, color: '#ffebcc' },
        { key: 2, color: '#ffb86c' },
        { key: 3, color: '#f01b2d' }
      ],
      dragging: null
    }
  },
  methods: {
    handleDragStart (e, item) {
      this.dragging = item
    },

    handleDragEnd () {
      this.dragging = null
    },

    handleDragEnter (e, item) {
      e.dataTransfer.effectAllowed = 'move'

      if (item === this.dragging) {
        return
      }

      const newItems = [...this.items]
      const src = newItems.indexOf(this.dragging)
      console.log(item)
      console.log(this.dragging)
      console.log(newItems)
      const dst = newItems.indexOf(item)
      console.log(dst)

      newItems.splice(dst, 0, ...newItems.splice(src, 1))

      this.items = newItems
    },

    handleDragOver (e) {
      e.dataTransfer.dropEffect = 'move'
    },

    handleDrop () {
    }
  }
}
</script>
<style scoped>
.container {
  display: flex
}

.item {
  margin-right: 10px;
  transition: all linear .3s
}
</style>
