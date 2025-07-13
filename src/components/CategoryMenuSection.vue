<script setup lang="ts">
  import { ref, toRef, watch } from 'vue';
  import type { Category } from '@/interfaces/Category';
  import { useRoute } from 'vue-router';


  interface Props {
    categories: Category[],
  }

  const route = useRoute();
  const props = defineProps<Props>();
  const categories = toRef(props, "categories");

  const getCurrentCategory = () => {
    const categoryName = route.params.id;
    //console.log(route.params.id);
    const selected = categories.value.find(category =>
        category.name.toLocaleLowerCase().replace(/\s+/g, '') == categoryName
    );

    //console.log(selected);
    return (selected ? selected.id : null);
  };

  const selectedCategory = ref(getCurrentCategory());

  watch( () => route.params.id, () => {
    selectedCategory.value = getCurrentCategory();
  })

</script>


<template>
  <div class="tabs">
      <RouterLink :to="category.link" class="category" v-for="category in categories"
        :key="category.name" :class="{ active: category.id === selectedCategory }">

          <div v-html="category.icon" class="svg-wrapper"></div>
          <p>{{ category.name }}</p>

      </RouterLink>
  </div>
</template>


<style scoped>

.tabs{
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 1px rgba(0,0,0,0.6);
  margin-bottom: 2rem;
  gap: 1rem;
}

.category{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 120px;
  height: 70px;
  border-radius: 10px;
}

.category:hover{
  background: #e2e2e2;
  transform: scale(1.1);
}

.category a{
  color: #661980;
}

.category.active{
  background: #CFBEF9;
  p{
    color: #1C1C1C;
  }
  svg{
    fill: #fff;
  }
}

svg{
  fill: red;
  transition: background 0.3s ease,
              transfor4m 0.5s ease;
}

.category a:active{
  color: #4f034c;
}
</style>
