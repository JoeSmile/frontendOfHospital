<template>
    <div class="loader">
        <div class="spinner">
            <span v-for='index of 12' class='spinner-blade' key={index}></span>
        </div>
    </div>
</template>
<script>
    export default{
        name:'loader'
    }
</script>
<style lang="scss">
.loader{
   height: calc(100% - 5.5rem);
}
.spinner {
  width: 5rem;
  top: 45%;
  left: 50%;
  font-size: 26px;
  position: relative;
  display: block;
  margin-top: -1rem;
  margin-left: -1rem;
}
.spinner .spinner-blade {
  position: absolute;
  left: .4629em;
  bottom: 0;
  width: 2px;
  height: 7px;
  border-radius: 2px;
  background-color: transparent;
  -webkit-transform-origin: center -6px;
      -ms-transform-origin: center -6px;
          transform-origin: center -6px;
  -webkit-animation: spinner-fade 0.7s infinite linear;
          animation: spinner-fade 0.7s infinite linear;
}
.spinner .spinner-blade:nth-child(1) {
  -webkit-animation-delay: 0s;
          animation-delay: 0s;
  -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
          transform: rotate(0deg);
}
.spinner .spinner-blade:nth-child(2) {
  -webkit-animation-delay: 0.083s;
          animation-delay: 0.083s;
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);
}
.spinner .spinner-blade:nth-child(3) {
  -webkit-animation-delay: 0.166s;
          animation-delay: 0.166s;
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);
}
.spinner .spinner-blade:nth-child(4) {
  -webkit-animation-delay: 0.249s;
          animation-delay: 0.249s;
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}
.spinner .spinner-blade:nth-child(5) {
  -webkit-animation-delay: 0.332s;
          animation-delay: 0.332s;
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);
}
.spinner .spinner-blade:nth-child(6) {
  -webkit-animation-delay: 0.415s;
          animation-delay: 0.415s;
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg);
}
.spinner .spinner-blade:nth-child(7) {
  -webkit-animation-delay: 0.498s;
          animation-delay: 0.498s;
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.spinner .spinner-blade:nth-child(8) {
  -webkit-animation-delay: 0.581s;
          animation-delay: 0.581s;
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg);
}
.spinner .spinner-blade:nth-child(9) {
  -webkit-animation-delay: 0.664s;
          animation-delay: 0.664s;
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);
}
.spinner .spinner-blade:nth-child(10) {
  -webkit-animation-delay: 0.747s;
          animation-delay: 0.747s;
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg);
}
.spinner .spinner-blade:nth-child(11) {
  -webkit-animation-delay: 0.83s;
          animation-delay: 0.83s;
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg);
}
.spinner .spinner-blade:nth-child(12) {
  -webkit-animation-delay: 0.913s;
          animation-delay: 0.913s;
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg);
}

@-webkit-keyframes spinner-fade {
  0% {
    background-color: #69717d;
  }
  100% {
    background-color: transparent;
  }
}

@keyframes spinner-fade {
  0% {
    background-color: #69717d;
  }
  100% {
    background-color: transparent;
  }
}

@-webkit-keyframes loading-fade {
  0% {
    background-color: #0099d5;
  }
  100% {
    background-color: transparent;
  }
}

@keyframes loading-fade {
  0% {
    background-color: #0099d5;
  }
  100% {
    background-color: transparent;
  }
}
</style>