<script setup lang="ts">
  import { onMounted, ref, toRef, watch } from 'vue';
  import { useRoute } from 'vue-router';

  import type { Category } from '@/interfaces/Category';


  interface Props {
    categories: Category[],
  }

  const route = useRoute();
  const props = defineProps<Props>();
  const categories = toRef(props, "categories");

  const emit = defineEmits <{
    (e: 'changeCategory', categoryId: number): void
  }>();

  const changeCategory = (categoryId : number ) => {
    emit('changeCategory', categoryId);
  }


  const getCurrentCategory = () => {
    const categoryName = route.params.id;

    if (!categoryName || typeof categoryName !== 'string') {
      return -1; // Mostrar todos los productos
    }

    const selected = categories.value.find(category =>
        category.name.toLocaleLowerCase().replace(/\s+/g, '') == categoryName
    );

    //console.log(selected);
    return (selected ? selected.id : -1 );
  };

  const selectedCategory = ref(getCurrentCategory());

  watch( () => route.params.id, () => {
    selectedCategory.value = getCurrentCategory();
    emit('changeCategory', selectedCategory.value);
  })

  onMounted(() => {
    selectedCategory.value = getCurrentCategory();
    emit('changeCategory', selectedCategory.value);
  });

</script>


<template>
  <div class="tabs">
      <RouterLink class="category" v-for="category in categories"
          :to="category.link" :key="category.name"
          :class="{ active: category.id === selectedCategory }"
          @click="changeCategory(category.id)">

        <div v-html="category.icon" class="svg-wrapper"></div>
        <p class="category-name">{{ category.name }}</p>

      </RouterLink>
  </div>
</template>


<style scoped>

.tabs{
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0 1rem;

  justify-content: flex-start;
  box-shadow: 0 1px rgba(0,0,0,0.6);
  margin-bottom: 2rem;
  gap: 0.5rem;


  scrollbar-width: thin;           /* Firefox */
  scrollbar-color: #ac69ee #f5f5f5; /* thumb color, track color */
  -webkit-overflow-scrolling: touch;
}

.tabs::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(to left, white, transparent); /* o #fff si fondo blanco */
  pointer-events: none;
}

/* Chrome, Edge, Safari */
.tabs::-webkit-scrollbar {
  height: 6px;
}

.tabs::-webkit-scrollbar-track {
  background: #f5f5f5;
  border-radius: 10px;
}

.tabs::-webkit-scrollbar-thumb {
  background-color: #e5cdfd; /* morado claro */
  border-radius: 10px;
  border: 1px solid #f5f5f5;
}

.tabs::-webkit-scrollbar-thumb:hover {
  background-color: #a855f7; /* morado más fuerte */
}

.category{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  min-width: 80px;
  width: 80px;
  max-width: 120px;
  height: 70px;
  max-height: 70px;

  border-radius: 10px;
}

.category:hover{
  background: #e2e2e2;
  transform: scale(1.1);
}

.category a{
  color: #661980;
}

.category a:active{
  color: #4f034c;
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

.category-name{
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg{
  fill: red;
  transition: background 0.3s ease,
              transfor4m 0.5s ease;
}



@media(min-width: 480px){
  .tabs{
    justify-content: center;
  }
  .category{
    min-width: 120px;
    width: 120px;
    height: 90px;
  }
}

</style>
