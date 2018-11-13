<template>
  <div>
    <div class="container">
      <p>
        東インド会社の品物ランダマイザです。ラウンドのはじめに「品物を引く」ボタンを押してください。
      </p>
      <div class="center-align">
        <button class="btn waves-effect waves-light teal" :disabled="items.length === 9" @click="pickItem">品物を引く<i class="material-icons right">get_app</i></button>
        <a class="btn waves-effect waves-light red modal-trigger" href="#confirmModal">リセット<i class="material-icons right">delete</i></a>
      </div>
      <h2 class="green-text">残りの品物</h2>
      <div class="row">
        <div v-for="i in 9" class="col s2 m1">
          <img class="leftoveritems" :class="{ 'leftoveritems-disabled': items.includes(i) }" :src="icon_src[i]">
        </div>
      </div>
      <h2 class="green-text">履歴</h2>
      <ul class="collection">
        <li class="collection-item" v-for="(item, index) in items">
          {{index + 1}}回目 <span class="teal-text">{{allItemNames[item]}}を手に入れました</span>
        </li>
      </ul>
    </div>
    <div id="confirmModal" class="modal">
      <div class="modal-content">
        <h3 class="red-text">確認</h3>
        <p>削除したデータは復元できません！本当にリセットする場合は、下の「リセットする」を押してください。</p>
      </div>
      <div class="modal-footer">
        <button class="modal-close waves-effect waves-grey btn-flat">戻る</button>
        <button href="#!" class="modal-close waves-effect waves-red btn-flat red-text" @click="resetItems">リセットする</button>
      </div>
    </div>
  </div>
</template>
<script>
  const localStorageName = 'east_india_company_items'
  const allItemNames = [
    null,
    '小麦',
    '野菜',
    '羊',
    '猪',
    '牛',
    '木材',
    'レンガ',
    '葦',
    '石材'
  ]
  export default {
    data() {
      return {
        items: [],
        icon_src: [
          null,
          require(`@/assets/1.png`),
          require(`@/assets/2.png`),
          require(`@/assets/3.png`),
          require(`@/assets/4.png`),
          require(`@/assets/5.png`),
          require(`@/assets/6.png`),
          require(`@/assets/7.png`),
          require(`@/assets/8.png`),
          require(`@/assets/9.png`)
        ],
        allItemNames: allItemNames
      }
    },
    mounted() {
      let modal = document.querySelectorAll('.modal')
      M.Modal.init(modal, {})
      this.items = JSON.parse(localStorage.getItem(localStorageName)) || []
    },
    methods: {
      pickItem() {
        let allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let pickableItems = allItems.filter((value) => {
          return ! this.items.includes(value)
        })
        let pickedItem = pickableItems[Math.floor(Math.random() * pickableItems.length)]
        this.items.push(pickedItem)
        localStorage.setItem(localStorageName, JSON.stringify(this.items))
        M.toast({html: allItemNames[pickedItem] + 'を得ました', classes: 'teal white-text picktoast-' + pickedItem})
      },
      resetItems() {
        localStorage.removeItem(localStorageName)
        this.items = []
        M.toast({html: 'リセットしました', classes: 'red white-text picktoast-1'})
      }
    }
  }
</script>
<style scoped>
h2 {
  font-size: 1.5rem;
}
.leftoveritems {
  height: 50px;
}
.leftoveritems-disabled {
  opacity: 0.25;
}
</style>