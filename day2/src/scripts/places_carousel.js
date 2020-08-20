
function PlacesCarousel() {
    const data = [
        {
            title: "Долина Шретера"
        },
        {
            title: "Долина Шрёдингера"
        },
        {
            title: "Долина Снеллиуса"
        },
        {
            title: "Долина Рейта"
        },
        {
            title: "Долина Планка"
        },
        {
            title: "Долина Палича"
        },
        {
            title: "Долина Кришна"
        },
    ]

    let currentSlideIndex = 0;

    const currentSlideIndexRef = document.getElementById('places-counter-current');
    const allSlidesIndexRef = document.getElementById('places-counter-all');
    const placeNameRef = document.getElementById('places-place-name');

    const backButton = document.getElementById('places-slide_back');
    const nextButton = document.getElementById('places-slide_next');


    const setInfoFromSlide = () => {
        currentSlideIndexRef.innerText = String(currentSlideIndex + 1);
        placeNameRef.innerText = data[currentSlideIndex].title;
    }

    const handleBackButtonClick = () => {
        currentSlideIndex = (currentSlideIndex - 1 + data.length) % data.length;
        setInfoFromSlide();
    }

    const handleNextButtonClick = () => {
        currentSlideIndex = (currentSlideIndex + 1) % data.length;
        setInfoFromSlide();
    }

    backButton.onclick = handleBackButtonClick;
    nextButton.onclick = handleNextButtonClick;

    setInfoFromSlide();
    allSlidesIndexRef.innerText = `/${data.length}`;
}

PlacesCarousel();