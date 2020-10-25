<template>
  <div>
      <div class="vx-row">
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="InboxIcon"
                  icon-right
                  statistic="12"
                  statisticTitle="No of Projects" 
                  color="primary"/>
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="ServerIcon"
                  icon-right
                  statistic="6"
                  statisticTitle="Running Projects"
                  color="success" />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="UsersIcon"
                  icon-right
                  statistic="13"
                  statisticTitle="No of Contractors"
                  color="danger" />
            </div>

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                <statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="LayersIcon"
                  icon-right
                  statistic="7"
                  statisticTitle="Completed Projects"
                  color="warning" />
            </div>
      </div>
      <tabs />
  </div>
</template>

<script>
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import Tabs from './tabs/Tabs'
export default {
    components: {
        StatisticsCardLine,
        Tabs
    }
}
</script>

<style>

</style>