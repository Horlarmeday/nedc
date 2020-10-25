<template>
  <div>
        <vs-prompt
            title="Create Label"
            accept-text= "Submit"
            button-cancel = "border"
            @cancel="initValues"
            @accept="createLabel"
            @close="activePrompt = false"
            :is-valid="validateForm"
            :active.sync="activePrompt">
        <div>
            <div class="vx-row">

                <div class="vx-col ml-auto flex">
                    <feather-icon icon="InfoIcon" class="cursor-pointer" svgClasses="text-success stroke-current w-5 h-5 mr-4"></feather-icon>

                    <feather-icon icon="StarIcon" class="cursor-pointer" svgClasses="text-warning stroke-current w-5 h-5 mr-4"></feather-icon>
                </div>
            </div>
            <div class="vx-col w-full mb-base">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <label for="">Label Name</label>
                            <vs-input class="w-full" name="name" v-model="name" />
                            <span class="text-danger text-sm">{{ errors.first('name') }}</span>
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col w-full">
                            <label>Color</label>
                            <input
                                v-model="colorx"
                                class="w-full"
                                type="color"
                                name="colorx"
                                value=""
                            />
                            <span class="text-danger text-sm">{{ errors.first('colorx') }}</span>
                        </div>
                    </div>
            </div>
        </div>
    </vs-prompt>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
    props: {
        displayPrompt: {
            type: Boolean,
            required: true
        }
    },
    components: {
        vSelect
    },
    data() {
        return {
            name: '',
            colorx: '#0d713a',
            projects: 2,
            progress: 55,
        }
    },
    // watch: {
    //     displayPrompt() {
    //         if (Object.entries(this.data).length === 0) {
    //             this.initValues()
    //             this.$validator.reset()
            
    //     }
    // },
    computed: {
        validateForm () {
            return !this.errors.any() && this.name !== '' && this.colorx !== ''
        },
        activePrompt:{
            get () {
                return this.displayPrompt
            },
            set (value) {
                this.$emit('hideDisplayPrompt', value)
            }
        },
    },
    methods: {
      handleError(error) {
            this.$vs.loading.close()
            this.$vs.notify({
              title:'Error',
              text: error.response.data,
              color:'danger',
              position:'top-center',
              iconPack: 'feather',
              icon:'icon-alert-circle'
            });
        },

      handleSuccess(response) {
            this.$vs.loading.close()
            this.$vs.notify({
              title:'Success',
              text: response.data.message,
              color:'primary',
              position:'top-center',
              iconPack: 'feather',
              icon:'icon-alert-circle'
            });
        },
      createLabel () {
        const obj = {
            name: this.name,
            colorx: this.colorx,
            projects: this.projects,
            progress: this.progress
        }
        this.$vs.loading()
        this.$validator.validateAll().then(result => {
            if (result) {
                this.$store.dispatch('label/addLabel', obj)
                .then(response => {
                    this.handleSuccess(response)
                    this.initValues()
                })
                .catch(err => { this.handleError(err) })
            }
        })
      },
      initValues() {
        this.name = ''
        this.colorx = ''
      }
    },
    
}
</script>

<style>

</style>