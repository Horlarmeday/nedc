<template>
  <div>
        <vs-prompt
            title="Create Contractor Account"
            accept-text= "Submit"
            button-cancel = "border"
            @cancel="initValues"
            @accept="createContractor"
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
                      <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                          <vs-input class="w-full" label-placeholder="Full Name" v-model="name" />
                        </div>
                      </div>
                      <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                          <vs-input class="w-full" type="email" label-placeholder="Email" v-model="email" />
                        </div>
                      </div>
                      <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                          <vs-input class="w-full" label-placeholder="Phone" v-model="phone" />
                        </div>
                      </div>
                      <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                          <vs-input class="w-full" type="text" label-placeholder="Company Name" v-model="company" />
                        </div>
                      </div>
                      <div class="vx-row mb-2">
                        <div class="vx-col w-full">
                          <vs-input class="w-full" type="text" label-placeholder="CAC Number" v-model="cac" />
                        </div>
                      </div>
                      <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                          <vs-checkbox class="inline-flex" v-model="assign_project">Assign Project?</vs-checkbox>
                        </div>
                      </div>
                      <!-- <div class="vx-row">
                        <div class="vx-col w-full">
                          <vs-button class="mr-3 mb-2" :disabled="" @click="">Submit</vs-button>
                          <vs-button color="warning" type="border" class="mb-2">Cancel</vs-button>
                        </div>
                      </div> -->
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
            email: '',
            phone: '',
            name: '',
            company: '',
            cac: '',
            assign_project: false
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
            return !this.errors.any() && this.name && this.email && this.company && this.phone
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
      createContractor () {
        const obj = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            company: this.company,
            cac: this.cac
        }
        this.$vs.loading()
        this.$validator.validateAll().then(result => {
            if (result) {
                this.$store.dispatch('contractor/addContractor', obj)
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
        this.phone = ''
        this.email = ''
        this.company = ''
        this.cac = ''
      }
    },
    
}
</script>

<style>

</style>