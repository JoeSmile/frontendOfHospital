<template>
  <div class="dialog" v-show="show" transition="dialog-fade">
    <div class="dialog-content">
      <slot name='title'></slot>
      <slot name='content'></slot>
      <slot name='button'></slot>
    </div>
  </div>
</template>

<style lang='scss' rel="stylesheet/scss">
  .dialog {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 80%;
  }

  .dialog-content {
    background: #fff;
    border-radius: 8px;
    text-align: center;
    .title{
      height: 5rem;
      /*padding-top: 1.5rem;*/
      font-size:   2rem;
      font-weight: 500;
    }
  }

  .dialog-fade-transition {
    transition: opacity .3s linear;
  }

  .dialog-fade-enter,
  .dialog-fade-leave {
    opacity: 0;
  }
  
  .content{
    padding: 2rem;
    word-break: break-all;
    font-size: 1.4rem;
    min-height: 4rem;
    color: #666666;
  }
  div.button{
    display: flex;
    border-top: 1px solid #CCC;
    height: 4rem;
    line-height: 3rem;
    button{
        flex: 1;
        background: none;
        font-size: 1.6rem;
        color: #0061b3;
    }
  }
</style>

<script>
import Popup from '../mixins/vuePopup';

export default {
  mixins: [Popup],
  props:{
    cbClose:{
        type: Function,
        default:function(){
            console.log('function default');
        }
    },
    mountedCb:{
      type:Function,
      default:function(){
      }
    }   
  },
  methods: {    
    // 响应 overlay事件
    overlayClick () {
      this.show = false;
      this.cbClose();
    },

    // 响应 esc 按键事件
    escPress () {
      this.show = false;
      this.cbClose();
    }
  },
  
  mounted(){
    this.mountedCb();
  }
}
</script>
