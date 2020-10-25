<template>
  <vx-card
    class="overflow-hidden"
    :style="{
      borderLeft: `6px solid ${this.project.colorx}`
    }"
  >
    <h5 class="mb-2 font-bold">{{ project.name }}</h5>
    <p class="text-dark">{{ project.agency }}</p>
    <p class="tag mt-2"><span class="flex items-center px-3 py-2 rounded"><div class="h-4 w-4 rounded-full mr-2" :style="{background: `${project.colorx}`}"></div>{{ project.label }}</span>
</p>
    <template slot="footer">
      <vs-divider />
      <div class="flex justify-between">
        <span class="flex items-center">
          <feather-icon
            icon="BriefcaseIcon"
            svgClasses="h-5 w-5 text-warning stroke-current"
          />
          <span class="ml-2">₦{{ project.value | toCurrency }}</span>

        </span>
        <span class="flex items-center">
          <feather-icon
            icon="CalendarIcon"
            svgClasses="h-5 w-5 text-primary stroke-current"
          />
          <span class="ml-2">{{ project.timeline }}</span>
        </span>
      </div>
    </template>
  </vx-card>
</template>

<script>
export default {
  props: {
    projectId: {
      type: Number,
      required: true
    }
    // projects: {
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      // projectLocal: this.projects.find(project => project.id === this.projectId)
      project: this.$store.getters['project/getProject'](this.projectId)
    }
  },

  filters: {
      toCurrency: function(value) {
      if (typeof value !== 'number') {
        var formatCurreny = new Intl.NumberFormat('en-US').format(
          parseInt(value)
        )
        return formatCurreny
      }
      var formatter = new Intl.NumberFormat('en-US').format(value)
      return formatter
    }
  }

  // computed: {
  //   stylex() {
  //     return this.styleCard.borderLeft =
  //   }
  // }
}
</script>

<style>
    .tag {
        font-size: 11px;
        font-weight: 400;
        line-height: 13px;
        border-radius: 5px;
        box-sizing: border-box;
        display: inline-block;
        font-style: normal;
        max-width: 100%;
        outline: none;
        overflow: hidden;
        padding: 3px 8px 4px 5px;
        text-overflow: ellipsis;
        vertical-align: top;
        white-space: nowrap;
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.08);
        margin: 2px 1px 3px 0;
    }
</style>
