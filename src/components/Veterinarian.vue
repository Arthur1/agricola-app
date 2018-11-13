<template>
  <div>
    <div class="container">
      <p>
        獣医の品物ランダマイザです。ラウンドのはじめに「マーカーを引く」ボタンを押してください。
      </p>
      <div class="center-align">
        <button class="btn btn-large waves-effect waves-light teal" :disabled="markers.length === 3" @click="pickMarkers">品物を引く<i class="material-icons right">get_app</i></button>
        <a class="btn btn-large waves-effect waves-light red modal-trigger" href="#confirmModal">リセット<i class="material-icons right">delete</i></a>
      </div>
      <h2 class="green-text">残りのマーカー</h2>
      <table>
        <thead>
          <tr>
            <th class="center-align"><img :src="marker_icon_src[0]" class="icon"></th>
            <th class="center-align"><img :src="marker_icon_src[1]" class="icon"></th>
            <th class="center-align"><img :src="marker_icon_src[2]" class="icon"></th>
         </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center-align">{{ leftoverMarkers[0] }}個</td>
            <td class="center-align">{{ leftoverMarkers[1] }}個</td>
            <td class="center-align">{{ leftoverMarkers[2] }}個</td>
          </tr>
        </tbody>
      </table>
      <h2 class="green-text">確率</h2>
      <table>
        <thead>
          <tr>
            <th class="center-align"><img :src="animal_icon_src[0]" class="icon"></th>
            <th class="center-align"><img :src="animal_icon_src[1]" class="icon"></th>
            <th class="center-align"><img :src="animal_icon_src[2]" class="icon"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center-align">{{ Math.round(probabilities[0] * 100) }}%</td>
            <td class="center-align">{{ Math.round(probabilities[1] * 100) }}%</td>
            <td class="center-align">{{ Math.round(probabilities[2] * 100) }}%</td>
          </tr>
        </tbody>
      </table>
      <h2 class="green-text">履歴</h2>
      <ul class="collection">
        <li class="collection-item" v-for="(record, index) in history">
          <span>{{index + 1}}回目 {{markerNames[record[0]]}}・{{markerNames[record[1]]}}</span><br>
          <span v-if="record[0] === record[1]" class="teal-text">{{ animalNames[record[0]] }}を得ました</span>
          <span v-else>---</span>
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
        <button href="#!" class="modal-close waves-effect waves-red btn-flat red-text" @click="reset">リセットする</button>
      </div>
    </div>
  </div>
</template>
</template>
<script>
  const localStorageMarkers = 'veterinarian_markers'
  const localStorageHistory = 'veterinarian_history'
  const animalNames = [
    '羊',
    '猪',
    '牛'
  ]
  const markerNames = [
    '葦',
    '石材',
    '木材'
  ]
  export default {
    data() {
      return {
        markers: [],
        history: [],
        marker_icon_src: [
          require(`@/assets/8.png`),
          require(`@/assets/9.png`),
          require(`@/assets/6.png`)
        ],
        animal_icon_src: [
          require(`@/assets/3.png`),
          require(`@/assets/4.png`),
          require(`@/assets/5.png`)
        ],
        animalNames: animalNames,
        markerNames: markerNames
      }
    },
    mounted() {
      let modal = document.querySelectorAll('.modal')
      M.Modal.init(modal, {})
      this.markers = JSON.parse(localStorage.getItem(localStorageMarkers)) || []
      this.history = JSON.parse(localStorage.getItem(localStorageHistory)) || []
      if (this.markers.length === 0 && this.history.length === 0) {
        this.markers = [0, 0, 0, 0, 1, 1, 1, 2, 2]
        localStorage.setItem(localStorageMarkers, JSON.stringify(this.markers))
      }
    },
    computed: {
      leftoverMarkers() {
        let markersList = [0, 0, 0]
        this.markers.forEach((value) => { markersList[value]++ })
        return markersList
      },
      probabilities() {
        let probabilitiesList = []
        let markersNum = this.markers.length
        for (let i = 0; i < 3; i++) {
          if (this.leftoverMarkers[i] <= 1) {
            probabilitiesList[i] = 0
          } else {
            probabilitiesList[i] = this.leftoverMarkers[i] * (this.leftoverMarkers[i] - 1) / markersNum / (markersNum - 1)
          }
        }
        return probabilitiesList
      }
    },
    methods: {
      pickMarkers() {
        let pickedMarker1 = this.markers[Math.floor(Math.random() * this.markers.length)]
        this.markers.splice(this.markers.findIndex(n => n === pickedMarker1), 1)
        let pickedMarker2 = this.markers[Math.floor(Math.random() * this.markers.length)]
        this.history.push([pickedMarker1, pickedMarker2])
        localStorage.setItem(localStorageHistory, JSON.stringify(this.history))
        if (pickedMarker1 === pickedMarker2) {
          localStorage.setItem(localStorageMarkers, JSON.stringify(this.markers))
          M.toast({html: animalNames[pickedMarker1] + 'を得ました', classes: 'teal white-text'})
        } else {
          this.markers.push(pickedMarker1)
          localStorage.setItem(localStorageMarkers, JSON.stringify(this.markers))
          M.toast({html: '何も得られませんでした', classes: 'yellow darken-2 white-text'})
        }
      },
      reset() {
        localStorage.removeItem(localStorageMarkers)
        localStorage.removeItem(localStorageHistory)
        this.markers = [0, 0, 0, 0, 1, 1, 1, 2, 2]
        this.history = []
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
.icon {
  display: inline-block;
  width: 2rem;
}
</style>