import Vue from 'vue'
import Drag from './Drag3.vue'

if (window.self === window.top) {
  console.log('')
  if (!window.__dnd_bridge__) {
    window.__dnd_bridge__ = new Vue()
  }
} else {
  if (!window.parent.__dnd_bridge__) {
    window.__dnd_bridge__ = window.parent.__dnd_bridge__ = new Vue()
  }
  console.log('该页面被嵌套')
}

export default Drag
