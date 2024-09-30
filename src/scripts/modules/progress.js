export function progress() {
    document.addEventListener('DOMContentLoaded', function() {
        const valueInput = document.getElementById('value-input');
        const progressCircle = document.querySelector('.progress-circle__value');
        const svg = document.querySelector('.svg-storke');
        const animateCheckbox = document.getElementById('animate-checkbox');
        const hideCheckbox = document.getElementById('hide-checkbox');
        const progressBlock = document.querySelector('.progress-section__container__block');
    
        const maxDashArray = 339.292;
        
        function updateProgress(value) {
            const progress = (100 - value) / 100 * maxDashArray;
            progressCircle.style.strokeDashoffset = progress;
        }
    
        valueInput.addEventListener('input', function() {
            let value = parseInt(valueInput.value, 10);
            if (isNaN(value) || value < 0) value = 0;
            if (value > 100) value = 100;
            updateProgress(value);
        });
    
        animateCheckbox.addEventListener('change', function() {
            if (animateCheckbox.checked) {
                svg.classList.add('animated');
            } else {
                svg.classList.remove('animated');
            }
        });
    
        hideCheckbox.addEventListener('change', function() {
            if (hideCheckbox.checked) {
                progressBlock.classList.add('hidden');
            } else {
                progressBlock.classList.remove('hidden');
            }
        });
    
        updateProgress(parseInt(valueInput.value, 10));
    });
    
}