import PopupManager from './popup-manager'
export {default as overlay} from './overlay'
export {getZIndex} from './utils'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    overlayColor: {
      type: String,
      default: '#000'
    }
  },
  // data(){
  //   return {
  //     show:false,
  //     overlay:true,
  //     overlayOpacity:0.4,
  //     overlayColor:'#000'
  //   }
  // },
  mounted() {
    if (this.show && this.overlay) {
      PopupManager.open(this)
    }
  },
  destroyed() {
    PopupManager.close(this)
  },
  watch: {
    show: function(val) {
      if (val && this.overlay) {
        PopupManager.open(this)
      } else {
        PopupManager.close(this)
      }
    }
  },
  beforeDestroy () {
    PopupManager.close(this)
  }
}
