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

<style>
.loading.dimmer {
  display: none;
  position: absolute;
  top: 0em !important;
  left: 0em !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.35);
  opacity: 1;
  line-height: 1;
  animation-fill-mode: both;
  animation-duration: 0.5s;
  transition: background-color 0.5s linear;
  flex-direction: column;
  justify-content: center;
  user-select: none;
  will-change: opacity;
  z-index: 1000;
}

.loading.active.dimmer {
  display: block;
}

.loading.dimmer .loader {
  display: block;
}

.loading.dimmer .loading.loader {
  color: rgba(255, 255, 255, 0.9);
}

.loading.dimmer .loading.loader:before {
  border-color: rgba(255, 255, 255, 0.15);
}

.loading.dimmer .loading.loader:after {
  border-color: #FFFFFF transparent transparent;
}

.loading.loader {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0px;
  height: 50px;
  width: 50px;
  text-align: center;
  z-index: 1000;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.loading.loader:before {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 500rem;
  border: 0.4em solid rgba(0, 0, 0, 0.1);
}

.loading.loader:after {
  position: absolute;
  content: '';
  top: 0%;
  left: 50%;
  width: 100%;
  height: 100%;
  -webkit-animation: loader 0.6s linear;
  animation: loader 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: #2ecc71 transparent transparent;
  border-style: solid;
  border-width: 0.4em;
  -webkit-box-shadow: 0px 0px 0px 1px transparent;
  box-shadow: 0px 0px 0px 1px transparent;
}

@-webkit-keyframes loader {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
