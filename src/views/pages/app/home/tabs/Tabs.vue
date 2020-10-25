<template>
  <!-- <vx-card> -->
    <div>
        <vs-tabs alignment="fixed">
            <vs-tab label="Ongoing Projects" class="mt-5">
                <div class="vx-row">
                    <div
                        class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 cursor-pointer"
                        v-for="(project, index) in list"
                        :key="project.pid"
                        :style="[{ transitionDelay: index * 0.1 + 's' }]"
                    >
                        <transition-group name="list-enter-up" appear>
                            <project-card
                                class="mb-base"
                                :projectId="project.pid"
                                :projects="list"
                                :key="project.pid"
                            ></project-card>
                        </transition-group>
                    </div>
                </div>
            </vs-tab>
            <vs-tab label="Completed Projects">
                <div class="vx-row">
                    <div
                        class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 cursor-pointer"
                        v-for="(project, index) in list"
                        :key="project.pid"
                        :style="[{ transitionDelay: index * 0.1 + 's' }]"
                    >
                        <transition-group name="list-enter-up" appear>
                            <project-card
                                class="mb-base"
                                :projectId="project.pid"
                                :projects="list"
                                :key="project.pid"
                            ></project-card>
                        </transition-group>
                    </div>
                </div>
            </vs-tab>
            <vs-tab label="Projects for Review">
                <div></div>
            </vs-tab>
            <vs-tab label="Ecosystem">
                <div></div>
            </vs-tab>
        </vs-tabs>
    </div>
  <!-- </vx-card> -->
</template>

<script>
import ProjectCard from './TabOngoingProject'
export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            
        }
    },
    computed: {
        list() {
            return this.$store.state.project.projects
        }
    },
    created() {
        this.$store.dispatch('project/fetchProjects')
    }
}
</script>

<style>
.white-bg {
    background: #fff;
    border-radius: .5rem;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
    -webkit-transition: all .3s ease-in-out;
    padding: 10px;
}
</style>