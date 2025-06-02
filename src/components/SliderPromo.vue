<script setup lang="ts">
    import {onMounted, onUnmounted, ref} from 'vue';
    import Promo1 from '@/assets/img/promo1Desk.png';
    import Promo2 from '@/assets/img/promo2Desk.png';
    import Promo3 from '@/assets/img/promo3Desk.png';

    const images = [Promo1, Promo2, Promo3];
    const sliderCounter = ref<number>(0);
    let intervalId: number;

    const advanceSlide = () : void => {
        sliderCounter.value = (sliderCounter.value + 1) % images.length;
    }

    function changeCounter(newIndex: number): void{
        clearInterval(intervalId);
        sliderCounter.value = newIndex;
        crearTimer();
    }

    const crearTimer = () => {
        intervalId = window.setInterval( advanceSlide, 2000);
    }

    onMounted( crearTimer );

    onUnmounted( () => {
        if(intervalId){
            clearInterval(intervalId);
        }
    })

</script>

<template>
    <div class="slider">
        <div class="slider-images">
            
            <img 
            v-for="(img, index) in images"
            :key="img"
            :src="img"
            :alt="`Promoción ${sliderCounter}`"
            v-show="sliderCounter == index">

        </div>

        <div class="slider-controls">
            <button v-for="(_, index) in images"
                :key="index"
                @click="changeCounter(index)"
                class="dot"
                :class="{ 'active': sliderCounter == index}"
            >

            </button>
        </div>

    </div>
</template>

<style scoped>

.slider{
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    margin: 0;
    padding-bottom: 8vh;
}

.slider-images{
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
}

.slider-controls{
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}


.dot{
    width: 14px;
    height: 14px;
    background-color: #DFF3FF;
    border-color: #bbcdd8;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    cursor: pointer;
    z-index: 1;
}

.dot.active{
    background-color: #79bae2;
}

.slider-images img{
    width: 100vw;
    max-height: 80vh;
    max-width: 100vw;
}

</style>