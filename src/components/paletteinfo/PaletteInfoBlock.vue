<template>
    <div class="palette-info-section">
        <div class="palette-info-container">
            <div class="text-column">
                <p class="palette-title">
                    Актуальная палитра <span class="brand-quote">“Saka Tekstil”</span>
                    из 45+ цветов – поможет решить любые задачи, стоящие перед вами
                </p>
            </div>
            <div class="warning-column">
                <div class="warning-box">
                    <div class="icon-wrapper">
                        <img src="../../assets/icons/warning.svg" class="warning-icon" alt="">
                    </div>
                    <div class="warning-text">
                        <span class="warning-accent">ВНИМАНИЕ!</span>
                        Цветопередача на вашем мониторе может значительно отличаться от оригинального цвета
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">

.palette-info-section {
    width: 100%;
    background-color: #ffffff;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}

.palette-info-container {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    box-sizing: border-box;
}

.text-column {
    flex: 1.2;
    max-width: 550px;
}

.palette-title {
    font-family: var(--font-family);
    font-size: 20px;
    line-height: 1.45;
    font-weight: 600;
    margin: 0;
}

.brand-quote {
    white-space: nowrap;
}

.warning-column {
    flex: 1;
    max-width: 480px;
}

.warning-box {
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px dashed var(--gold-color);
    border-radius: 4px;
    padding: 16px 20px;
}

.icon-wrapper {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.warning-icon {
    width: 100%;
    height: 100%;
}

.warning-text {
    font-family: var(--font-family);
    font-size: 11px;
    line-height: 1.5;
    text-transform: uppercase;
}

.warning-accent {
    font-weight: 800;
    color: #2c3e50;
    display: inline-block;
    margin-right: 4px;
}

@include tablet {
    .palette-info-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }

    .text-column,
    .warning-column {
        max-width: 100%;
        width: 100%;
    }

    .palette-title {
        font-size: 18px;
    }
}
</style>