<template>
    <div class="certs-section">
        <div class="certs-container">
            <h2 class="certs-title">Saka Tekstil дорожит своей репутацией</h2>
            <div class="certs-wrapper">
                <button class="arrow-btn" @click="prevSlide" aria-label="Предыдущий слайд">
                    <img src="../../assets/icons/arrowleft.svg" alt="Назад">
                </button>
                <div class="certs-viewport">
                    <div 
                        class="certs-track" 
                        :style="trackStyle"
                        @transitionend="handleTransitionEnd">
                        <div 
                            v-for="(cert, index) in extendedCertificates" 
                            :key="index" 
                            class="cert-card">
                            <img :src="cert.src" :alt="cert.alt" class="cert-img" />
                        </div>
                    </div>
                </div>
                <button class="arrow-btn" @click="nextSlide" aria-label="Следующий слайд">
                    <img src="../../assets/icons/arrowright.svg" alt="Вперед">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const baseCertificates = [
    { src: '/src/assets/images/sert1.png', 
    alt: 'Сертификат качества 1' 
},
    { src: '/src/assets/images/sert2.png', 
    alt: 'Свидетельство о регистрации'
},
    { src: '/src/assets/images/sert3.png', 
    alt: 'Сертификат качества 2'
}
];

const extendedCertificates = computed(() => {
    return [...baseCertificates, ...baseCertificates, ...baseCertificates];
});

const currentIndex = ref(baseCertificates.length);
const itemsToShow = ref(3); 
const gap = 24; 

const isTransitioning = ref(true); 
const isMoving = ref(false); 
const step = computed(() => itemsToShow.value);

const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
        itemsToShow.value = 1; 
    } else if (width < 1024) {
        itemsToShow.value = 2; 
    } else {
        itemsToShow.value = 3; 
    }
};

const nextSlide = () => {
    if (isMoving.value) return;
    isMoving.value = true;
    isTransitioning.value = true;
    currentIndex.value += step.value; 
};

const prevSlide = () => {
    if (isMoving.value) return;
    isMoving.value = true;
    isTransitioning.value = true;
    currentIndex.value -= step.value; 
};

const handleTransitionEnd = () => {
    const len = baseCertificates.length;

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
    }, 30);
};

const trackStyle = computed(() => {
    const translateFormula = `calc(-1 * ${currentIndex.value} * (100% + ${gap}px) / ${itemsToShow.value})`;
    return {
        transform: `translateX(${translateFormula})`,
        transition: isTransitioning.value ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
        '--items': itemsToShow.value,
        '--gap': `${gap}px`
    };
});

onMounted(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateItemsToShow);
});
</script>

<style lang="scss">
.certs-section {
    width: 100%;
    background-color: #ffffff;
    padding: 80px 0;
    box-sizing: border-box;
}

.certs-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    box-sizing: border-box;
}

.certs-title {
    font-family: var(--font-famaly), sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: -0.5px;
}

.certs-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
}

/* Окно просмотра */
.certs-viewport {
    overflow: hidden;
    width: 100%;
    max-width: 1128px; 
}

/* Трек/лента слайдов */
.certs-track {
    display: flex;
    gap: var(--gap);
    width: 100%;
}

/* Карточка сертификата */
.cert-card {
    flex: 0 0 calc((100% - var(--gap) * (var(--items) - 1)) / var(--items));
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 4px;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    .cert-img {
        max-width: 100%;
        height: auto;
        display: block;
    }
}

.arrow-btn {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: #f5f5f5;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
</style>