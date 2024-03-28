<template>
  <component v-if="$route.meta.includeLayout" :is="$route.meta.layout">
    <router-view />
  </component>
  <div v-else>
    <router-view />
  </div>
</template>

<style></style>
