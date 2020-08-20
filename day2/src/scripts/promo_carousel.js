function PromoCarousel() {
    const data = [
        {
            title: "Живи на луне",
            subtitle: "Принципиально новый дизайнерский комплекс особняков премиум-класса, расположенный на Луне, для тех, кто дорого ценит стиль и функциональность.",
        },
        {
            title: "Работай на луне",
            subtitle: "Занимайся тем же самым, что и раньше, но только в условиях пониженной гравитации. Успей забронировать номера с видом на Землю."
        },
        {
            title: "Отдыхай на луне",
            subtitle: "Здесь не действуют земные законы, а мораль еще не успела оформиться. Вы можете заниматься чем хотите с кем хотите и никто вас не осудит."
        },
    ]

    let currentSlideIndex = 0;
    const actionsBlockRef = document.getElementById('promo-carousel-actions');
    const titleRef = document.getElementById('promo-carousel-info-title');
    const subtitleRef = document.getElementById('promo-carousel-info-subtitle');
    const actionButtons = data.map( (element, index) => {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = String(index + 1);
        buttonElement.className = "promo-carousel-actions-item";
        return buttonElement;
    });

    const setInfoFromSlide = (slideIndex) => {
        titleRef.innerText = data[slideIndex].title;
        subtitleRef.innerText = data[slideIndex].subtitle;
        actionButtons[slideIndex].classList.add("active");
    }

    for (let i = 0; i<actionButtons.length; i++) {
        const actionButton = actionButtons[i];
        actionButton.onclick = () => {
            currentSlideIndex = i;
            actionButtons.forEach(button => button.classList.remove("active"));
            setInfoFromSlide(i);
        }
    }

    actionButtons.forEach(button => actionsBlockRef.appendChild(button));

    setInfoFromSlide(currentSlideIndex);
}

PromoCarousel();