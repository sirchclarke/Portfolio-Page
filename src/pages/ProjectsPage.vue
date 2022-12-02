<template>
<h3>Projects</h3>
<FeatureProjects/>
</template>
<script>
import FeatureProjects from '../components/FeatureProjects.vue'
export default {
    name: 'ProjectsPage',
    components: {
      FeatureProjects
    }
}
</script>

<style>
.form-container{
  display: flex;
  position: relative;
  right: 150px;
  justify-content: flex-end;
  padding-right: 1rem;
  border-radius: 7px; 
}

.select-container{
  font-size: 20px;
   
  background-color: rgba(255, 255, 255, 0.5);;
  border-radius: 7px;
  padding: .6rem 1rem;
}</style>