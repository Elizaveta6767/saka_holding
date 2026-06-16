<template>
    <div class="viewed-section">
        <div class="viewed-container">
            <h2 class="viewed-title">Недавно просмотренные</h2>
            <div class="viewed-wrapper">
                <button class="nav-btn" @click="moveSlide(-1)" aria-label="Предыдущий блок">
                    <img src="../../assets/icons/arrowleft.svg" alt="Назад">
                </button>
                <div class="viewed-viewport">
                    <div 
                        class="viewed-track" 
                        :style="trackStyle"
                        @transitionend="handleTransitionEnd">
                        <div 
                            v-for="(item, index) in extendedItems" 
                            :key="index" 
                            class="product-card">
                            <div class="img-wrapper">
                                <img :src="item.image" :alt="item.name" class="product-img"/>
                            </div>
                            <div class="product-content">
                                <h3 class="product-name">{{ item.name }}</h3>
                                <div class="product-price">
                                    <span class="current-price">{{ item.price }}$</span>
                                    <span class="product-size">{{ item.size }} см</span>
                                </div>
                                <button class="details-btn">
                                    Подробнее
                                    <img src="../../assets/icons/arrowright.svg" class="btn-arrow" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="nav-btn" @click="moveSlide(1)" aria-label="Следующий блок">
                    <img src="../../assets/icons/arrowright.svg" alt="Вперед">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const PRODUCTS_DATA = [
    { name: 'Кулинарная гладь', 
    price: '11,4', 
    size: '180', 
    image: '/src/assets/images/blue-glad.png' },
    { name: 'Кулинарная гладь', 
    price: '13', 
    size: '180', 
    image: '/src/assets/images/grey-glad.png' },
    { name: 'Кулинарная гладь', 
    price: '122,4', 
    size: '180', 
    image: '/src/assets/images/orange-glad.png' },
    { name: 'Кулинарная гладь', 
    price: '13,84', 
    size: '180', 
    image: '/src/assets/images/green-glad.png' },
    { name: 'Кулинарная гладь', 
    price: '10,99', 
    size: '180', 
    image: '/src/assets/images/blue-glad.png' },
    { name: 'Кулинарная гладь', 
    price: '15,00', 
    size: '180', 
    image: '/src/assets/images/grey-glad.png' },
    { name: 'Кулинарная гладь', 
    price: '99,99', 
    size: '180', 
    image: '/src/assets/images/orange-glad.png' },
    { name: 'Кулинарная гладь', 
    price: '11,25', 
    size: '180', 
    image: '/src/assets/images/green-glad.png' },
];
const CARD_GAP = 24; 
const TRANSITION_DURATION = '0.6s';
const TRANSITION_EASING = 'cubic-bezier(0.25, 1, 0.5, 1)';
const TELEPORT_DELAY = 30; 
const extendedItems = computed(() => [...PRODUCTS_DATA, ...PRODUCTS_DATA, ...PRODUCTS_DATA]);
const itemsToShow = ref(4); 
const currentIndex = ref(PRODUCTS_DATA.length); 
const isTransitioning = ref(true); 
const isMoving = ref(false); 

const moveStep = computed(() => itemsToShow.value);

const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width < 768) itemsToShow.value = 1;
    else if (width < 1100) itemsToShow.value = 2;
    else itemsToShow.value = 4;
};
const moveSlide = (direction) => {
    if (isMoving.value) return; 
    isMoving.value = true;
    isTransitioning.value = true;
    currentIndex.value += direction * moveStep.value;
};
const handleTransitionEnd = () => {
    const len = PRODUCTS_DATA.length; 

    if (currentIndex.value >= len * 2) {
        isTransitioning.value = false;
        currentIndex.value -= len;
    } 
    else if (currentIndex.value < len) {
        isTransitioning.value = false;
        currentIndex.value += len; 
    }

    setTimeout(() => {
        isTransitioning.value = true;
        isMoving.value = false;
    }, TELEPORT_DELAY);
};
const trackStyle = computed(() => {
    const translateFormula = `calc(-1 * ${currentIndex.value} * (100% + ${CARD_GAP}px) / ${itemsToShow.value})`;
    return {
        transform: `translateX(${translateFormula})`,
        transition: isTransitioning.value ? `transform ${TRANSITION_DURATION} ${TRANSITION_EASING}` : 'none',
        '--items': itemsToShow.value,
        '--gap': `${CARD_GAP}px`
    };
});


</script>

<style lang="scss" scoped>
.viewed-section {
    width: 100%;
    padding: 60px 0;
    background-color: #fcfcfc;
    box-sizing: border-box;
}

.viewed-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: border-box;
}

.viewed-title {
    font-family: var(--font-famaly), sans-serif;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 40px;
    margin-left: 70px;
}

.viewed-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
}

.viewed-viewport {
    overflow: hidden;
    width: 100%;
}

.viewed-track {
    display: flex;
    gap: var(--gap);
    width: 100%; 
}

.product-card {
    flex: 0 0 calc((100% - var(--gap) * (var(--items) - 1)) / var(--items));
    background: #ffffff;
    border-radius: 12px;
    padding: 10px;
    box-sizing: border-box;
    transition: box-shadow 0.3s ease;
}

.img-wrapper {
    width: 100%;
    height: 220px;
    border-radius: 10px;
    background: #f0f0f0;
}

.product-img {
    width: 100%;
    height: 100%;
}

.product-content {
    padding: 15px 5px 5px;
}

.product-name {
    font-size: 16px;
    color: #333;
    margin-bottom: 10px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
}

.product-price {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 20px;
    .current-price {
        font-size: 18px;
        font-weight: 700;
    }
    .product-size {
        font-size: 12px;
    }
}
.details-btn {
    width: 100%;
    background-color: var(--gold-color); 
    border: none;
    padding: 12px 20px;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
}
.nav-btn {
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
        width: 20px;
    }
}
</style>