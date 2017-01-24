<style lang="scss" scoped>

</style>

<template>
    <div class="chipItem">
        <div :class='iconName'></div>
        <div class='name'>{{name}}</div>
        <slot name='dic'></slot>
    </div>
</template>

<script>
    export default {
        props:['iconName','name'],
        data: function () {
            return {
               
            }
        }
    }
</script>