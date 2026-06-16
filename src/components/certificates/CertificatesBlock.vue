<template>
    <div class="certs-section">
        <div class="certs-container">
            <h2 class="certs-title">Saka Tekstil дорожит своей репутацией</h2>
            <div class="certs-wrapper">
                <button class="arrow-btn">
                    <img src="/src/assets/icons/arrowleft.svg" alt="">
                </button>
                <div class="certs-grid">
                    <div class="cert-card">
                        <img src="/src/assets/images/sert1.png" alt="Сертификат качества" class="cert-img" />
                    </div>
                    <div class="cert-card">
                        <img src="/src/assets/images/sert2.png" alt="Свидетельство о регистрации" class="cert-img" />
                    </div>
                    <div class="cert-card">
                        <img src="/src/assets/images/sert3.png" alt="Сертификат качества" class="cert-img" />
                    </div>
                </div>
                <button class="arrow-btn">
                    <img src="/src/assets/icons/arrowright.svg" alt="">
                </button>

            </div>
        </div>
    </div>
</template>

<script setup>
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
    font-family: var(--font-famaly);
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

.certs-grid {
    display: flex;
    justify-content: center;
    gap: 24px;
}

.cert-card {
    flex: 1;
    max-width: 360px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: center;
    align-items: center;
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
    flex-shrink: 0;
    cursor: pointer;
}

@media (max-width: 992px) {
    .certs-grid {
        gap: 15px;
    }

    .certs-container {
        padding: 0 20px;
    }
}

@media (max-width: 768px) {
    .certs-wrapper {
        flex-direction: column;
    }

    .certs-grid {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    .cert-card {
        width: 100%;
        max-width: 320px;
    }

    .arrow-btn {
        display: none;
    }
}
</style>