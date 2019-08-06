<template>
  <div id="app">
    <div
class="container"
draggable="true" />
    <div
      v-for="(item, index) in 5"
      :key="index"
      draggable="true"
      :id="'a'+index"
      class="a"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd">{{index}}</div>
    <div
      class="container"
      @dragenter="handleDragEnter"
      @drop="handleDrop"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"></div>

    <draggable v-model="myArray">
      <div
class="a"
v-for="element in myArray"
:key="element.id">{{element.name}}</div>
    </draggable>

    <!-- sdfsfd -->
    <div style="display:flex">
      <Drag v-model="list1">
        <component
:is="item.name"
v-for="(item) in list1"
:key="item.id"></component>
      </Drag>
      <Drag v-model="list2">
        <component
:is="item.name"
v-for="(item) in list2"
:key="item.id"
:haha="item.id"></component>
      </Drag>

    </div>
    <Test />
          <Drag2 v-model="list2">
        <component
:is="item.name"
v-for="(item) in list2"
:key="item.id"
:haha="item.id"></component>
      </Drag2>
      <Drag3
        v-model="list2"
        :clone="cloneDog"
        style="margin-top:20px">
        <component
        :is="item.name"
        v-for="(item,index) in list2"
        :key="index"
        :haha="item.id"></component>
      </Drag3>
      <Vue3/>
  </div>
</template>

<script>
import Drag from './components/Drag'
import draggable from 'vuedraggable'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import D from './components/D'
import Test from './components/Test'
import Drag2 from './components/Drag2'
import Drag3 from './components/Drag3.js'
import { EventBus } from './components/EventBus'
import Vue3 from './components/Vue3'

let idGlobal = 10
export default {
  name: 'app',
  components: { draggable, Drag, A, B, C, D, Test, Drag2, Drag3, Vue3 },
  data () {
    return {
      dragged: null,
      myArray: [
        {
          id: 0,
          name: 'a',
          fun () { console.log(111) }
        },
        {
          id: 1,
          name: 'b'
        },
        {
          id: 2,
          name: 'c'
        }
      ],
      list1: [
        {
          id: 1,
          name: 'A'
        },
        {
          id: 2,
          name: 'B'
        },
        {
          id: 3,
          name: 'C'
        },
        {
          id: 4,
          name: 'D'
        }
      ],
      list2: [
        {
          id: 1,
          name: 'A'
        },
        {
          id: 2,
          name: 'B'
        },
        {
          id: 3,
          name: 'C'
        },
        {
          id: 4,
          name: 'D'
        }
      ]
    }
  },
  methods: {
    handleDragStart (e) {
      console.log(e)
      e.target.style.opacity = '.5'
      this.dragged = e.target
      // 设置 ID
      e.dataTransfer.setData('text/plain', e.target.id)
      console.log('DragStart', e.target.id)
    },
    handleDrag (e) {
      console.log('Drag', e.target.id)
    },
    handleDragEnd (e) {
      e.target.style.opacity = ''
      console.log('DragEnd', e.target.id)
    },
    handleDragEnter (e) {
      e.preventDefault()
      e.target.style.backgroundColor = '#ccc'
      console.log('DragEnter', e.target.id)
    },
    handleDragOver (e) {
      e.preventDefault()
      console.log('DragOver', e.target.id)
    },
    handleDragLeave (e) {
      e.target.style.backgroundColor = ''
      console.log('DragLeave', e.target.id)
    },
    handleDrop (e) {
      e.preventDefault()
      const sourceId = e.dataTransfer.getData('text/plain')
      console.log(sourceId)
      e.target.style.backgroundColor = ''
      e.target.appendChild(this.$('#' + sourceId))
      console.log('Drop', e.target.id)
    },
    $ (element) {
      return document.querySelector(element)
    },
    cloneDog ({ id }) {
      return {
        id: idGlobal++,
        name: `cat ${id}`
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px;
  background-color: #dae8fc;
  border: 1px solid #6c8ebf;
}
.a {
  padding: 10px;
  background-color: #f8cecc;
  border: 1px solid #b85450;
}
</style>
