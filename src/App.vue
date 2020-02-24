<template>
  <div id="app">
    <chartist type="Line" :data="data" :options="options"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
          data: {
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              series: [
                  [12, 9, 7, 8, 5],
                  [2, 1, 3.5, 7, 3],
                  [1, 3, 4, 5, 6]
              ]
          },
          options: {
              fullWidth: true,
              chartPadding: {
                  right: 40
              }
          }
      }
    }
  }
</script>
