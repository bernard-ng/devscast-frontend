<template>
  <div>
    <transition name="fade">
      <div class="loading active dimmer">
      <span class="loading loader"></span>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LoadingWidget'
}
</script>

<style lang="scss">
.loading {
  &.dimmer {
    display: none;
    position: absolute;
    top: 0em !important;
    left: 0em !important;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    padding: 1em;
    background-color: rgb(32, 32, 32);
    animation: bg 3s linear 0.3s infinite;
    opacity: 1;
    line-height: 1;
    transition: background-color 0.3s linear;
    flex-direction: column;
    justify-content: center;
    user-select: none;
    will-change: opacity;
    z-index: 1000;

    &.active {
      display: block;
    }

    & .loader {
      display: block;
    }

    & .loading {
      &.loader {
        color: rgba(255, 255, 255, 0.9);

        &:before {
          border-color: rgba(255, 255, 255, 0.15);
        }

        &:after {
          border-color: #ffffff transparent transparent;
        }
      }
    }
  }
}

.loading.loader {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  height: 50px;
  width: 50px;
  text-align: center;
  z-index: 1000;
  transform: translateX(-50%) translateY(-50%);
  border-color: #2ecc71;

  &:before {
    position: absolute;
    content: '';
    top: 0%;
    left: -5%;
    width: 100%;
    height: 100%;
    border-radius: 500rem;
    border: 0.4em solid rgba(0, 0, 0, 0.1);
  }

  &:after {
    position: absolute;
    content: '';
    top: 0%;
    left: -5%;
    width: 100%;
    height: 100%;
    animation: loader 0.8s linear;
    animation-iteration-count: infinite;
    border-radius: 500rem;
    border-color: #2ecc71 transparent transparent;
    border-style: solid;
    border-width: 0.4em;
    box-shadow: 0px 0px 0px 1px transparent;
  }
}

@keyframes loader {
  from {
    filter: hue-rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    filter:  hue-rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes bg {
  0% {
    background-color: #110F16;
  }

  50% {
    background-color: rgb(39, 38, 38)
  }

  100% {
    background-color: #110F16;
  }
}
</style>
