<template>
	<div>
    <div class="container">
      <p>
        畑の使者のスペースランダマイザです。すでに使用済みのスペースをタップしてから、「実行する」ボタンを押してください。
      </p>
      <div class="input-field">
        <button class="btn waves-effect waves-light teal" :disabled="allSelected" @click="pickSpace">実行する<i class="material-icons right">autorenew</i></button>
      </div>
      <div class="field_wrapper">
        <img src="@/assets/board.jpg" class="field_wrapper">
        <label for="field_space-0" class="field_space field_space-0" :class="{'field_space-checked': field[0], 'field_space-picked': pickedSpace === 0}"></label>
        <label for="field_space-1" class="field_space field_space-1" :class="{'field_space-checked': field[1], 'field_space-picked': pickedSpace === 1}"></label>
        <label for="field_space-2" class="field_space field_space-2" :class="{'field_space-checked': field[2], 'field_space-picked': pickedSpace === 2}"></label>
        <label for="field_space-3" class="field_space field_space-3" :class="{'field_space-checked': field[3], 'field_space-picked': pickedSpace === 3}"></label>
        <label for="field_space-4" class="field_space field_space-4" :class="{'field_space-checked': field[4], 'field_space-picked': pickedSpace === 4}"></label>
        <label for="field_space-5" class="field_space field_space-5" :class="{'field_space-checked': field[5], 'field_space-picked': pickedSpace === 5}"></label>
        <label for="field_space-6" class="field_space field_space-6" :class="{'field_space-checked': field[6], 'field_space-picked': pickedSpace === 6}"></label>
        <label for="field_space-7" class="field_space field_space-7" :class="{'field_space-checked': field[7], 'field_space-picked': pickedSpace === 7}"></label>
        <label for="field_space-8" class="field_space field_space-8" :class="{'field_space-checked': field[8], 'field_space-picked': pickedSpace === 8}"></label>
        <label for="field_space-9" class="field_space field_space-9" :class="{'field_space-checked': field[9], 'field_space-picked': pickedSpace === 9}"></label>
        <label for="field_space-10" class="field_space field_space-10" :class="{'field_space-checked': field[10], 'field_space-picked': pickedSpace === 10}"></label>
        <label for="field_space-11" class="field_space field_space-11" :class="{'field_space-checked': field[11], 'field_space-picked': pickedSpace === 11}"></label>
        <label for="field_space-12" class="field_space field_space-12" :class="{'field_space-checked': field[12], 'field_space-picked': pickedSpace === 12}"></label>
        <label for="field_space-13" class="field_space field_space-13" :class="{'field_space-checked': field[13], 'field_space-picked': pickedSpace === 13}"></label>
        <label for="field_space-14" class="field_space field_space-14" :class="{'field_space-checked': field[14], 'field_space-picked': pickedSpace === 14}"></label>
        <input type="checkbox" id="field_space-0" class="field_checkbox" v-model="field[0]">
        <input type="checkbox" id="field_space-1" class="field_checkbox" v-model="field[1]">
        <input type="checkbox" id="field_space-2" class="field_checkbox" v-model="field[2]">
        <input type="checkbox" id="field_space-3" class="field_checkbox" v-model="field[3]">
        <input type="checkbox" id="field_space-4" class="field_checkbox" v-model="field[4]">
        <input type="checkbox" id="field_space-5" class="field_checkbox" v-model="field[5]">
        <input type="checkbox" id="field_space-6" class="field_checkbox" v-model="field[6]">
        <input type="checkbox" id="field_space-7" class="field_checkbox" v-model="field[7]">
        <input type="checkbox" id="field_space-8" class="field_checkbox" v-model="field[8]">
        <input type="checkbox" id="field_space-9" class="field_checkbox" v-model="field[9]">
        <input type="checkbox" id="field_space-10" class="field_checkbox" v-model="field[10]">
        <input type="checkbox" id="field_space-11" class="field_checkbox" v-model="field[11]">
        <input type="checkbox" id="field_space-12" class="field_checkbox" v-model="field[12]">
        <input type="checkbox" id="field_space-13" class="field_checkbox" v-model="field[13]">
        <input type="checkbox" id="field_space-14" class="field_checkbox" v-model="field[14]">
      </div>
      <p>
        魔女の踊り場[FR059]などで農場が拡張された場合には、もとある家のスペースを未使用にして代用してください。
      </p>
    </div>
  </div>
</template>
<script>
  const field = [false, true, true, false, false, false, false, false, false, false, false, false, false, false, false]
  export default {
    data() {
      return {
        field: field,
        pickedSpace: null
      }
    },
    computed: {
      allSelected() {
        for (let i = 0; i < 15; i++) {
          if (! this.field[i]) {
            return false
          }
        }
        return true
      }
    },
    methods: {
      pickSpace() {
        let pickableList = []
        for (let i = 0; i < 15; i++) {
          if (! this.field[i]) pickableList.push(i)
        }
        this.pickedSpace = pickableList[Math.floor(Math.random() * pickableList.length)]
        M.toast({html: '未使用1スペースを選択しました', classes: 'teal white-text'})
      }
    }
  }
</script>
<style scoped>
h1 {
  font-size: 1.5rem;
}
.field_wrapper {
  position: relative;
  width: 100%;
}
.field_space {
  display: block;
  position: absolute;
  background-color: transparent;
  cursor: pointer;
}
.field_space-checked {
  background-color: rgba(255, 0, 0, 0.5);
}
.field_space-picked {
  background-image: url('../assets/marker.png');
  background-size: 80% 80%;
  background-position: center;
  background-repeat: no-repeat;
}
.field_space-0 {
  top: 8.06%;
  bottom: 68.54%;
  left: 4.75%;
  right: 80.25%;
}
.field_space-1 {
  top: 36.89%;
  bottom: 38.3%;
  left: 4.75%;
  right: 80.25%;
}
.field_space-2 {
  top: 67.53%;
  bottom: 7.66%;
  left: 4.75%;
  right: 80.25%;
}
.field_space-3 {
  top: 8.06%;
  bottom: 68.54%;
  left: 23.75%;
  right: 61.25%;
}
.field_space-4 {
  top: 36.89%;
  bottom: 38.3%;
  left: 23.75%;
  right: 61.25%;
}
.field_space-5 {
  top: 67.53%;
  bottom: 7.66%;
  left: 23.75%;
  right: 61.25%;
}
.field_space-6 {
  top: 8.06%;
  bottom: 68.54%;
  left: 42.75%;
  right: 42.25%;
}
.field_space-7 {
  top: 36.89%;
  bottom: 38.3%;
  left: 42.75%;
  right: 42.25%;
}
.field_space-8 {
  top: 67.53%;
  bottom: 7.66%;
  left: 42.75%;
  right: 42.25%;
}
.field_space-9 {
  top: 8.06%;
  bottom: 68.54%;
  left: 61.25%;
  right: 23.75%;
}
.field_space-10 {
  top: 36.89%;
  bottom: 38.3%;
  left: 61.25%;
  right: 23.75%;
}
.field_space-11 {
  top: 67.53%;
  bottom: 7.66%;
  left: 61.25%;
  right: 23.75%;
}
.field_space-12 {
  top: 8.06%;
  bottom: 68.54%;
  left: 80.25%;
  right: 4.75%;
}
.field_space-13 {
  top: 36.89%;
  bottom: 38.3%;
  left: 80.25%;
  right: 4.75%;
}
.field_space-14 {
  top: 67.53%;
  bottom: 7.66%;
  left: 80.25%;
  right: 4.75%;
}
.field_checkbox {
  display: none;
}
</style>