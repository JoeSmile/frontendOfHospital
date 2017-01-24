<template>
    <div id='overlay' class="overlay" @click.prevent.stop="handlerClick" :style="style" transition="overlay-fade"></div>
</template>

<script>
import { getZIndex } from './utils';
export default {
    props:{
        fixed:{
            type: Boolean,
            default: false
        },
        onClick: {
            type: Function
        },
        opacity: {
            type: Number,
            default: 0.4
        },
        color: {
            type: String,
            default: '#000'
        }
    },
    data(){
        return {
            zIndex: getZIndex()
        }
    },
    computed:{
        style(){
            return{
                'opacity': this.opacity,
                'background-color':this.color,
                'position': this.fixed ? 'fixed' : '',
                'z-index': this.zIndex
            }
        }
    },
    methods:{
        handlerClick(){
            // 外层控制
            if(this.onClick){
                this.onClick();
            }
        }
    }
}
</script>

<style lang="css">
.overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: .4;
    z-index: 1000;
}

.overlay-fade-transition{
    transition: all .3 linear;
}

.overlay-fade-transition.overlay-fade-enter,
.overlay-fade-transition.overlay-fade-leave {
  opacity: 0 !important;
}
</style>
