export const futureHereNewTemplate = ({ images, title }) => {
    // Генерация блока с изображением
    const imageBlock = images
        .map(({ scr, alt }) => {
            return `
                <div class="left_container_future">
                    <img class="img_vision" src="${scr}" alt="${alt}" />
                </div>
            `;
        })
        .join('');

    // Генерация блока с заголовками и текстом
    const titleBlock = title
        .map(({ index, name_class, text_title }) => {
            return `
                <${index} class="${name_class}">
                    ${text_title}
                </${index}>
            `;
        })
        .join('');

    // Объединение в одну структуру
    return `
        <div class="future_here_new">
            ${imageBlock}
            <div class="right_container_future">
                ${titleBlock}
            </div>
        </div>
    `;
};
