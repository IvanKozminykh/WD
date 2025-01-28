export const earlyAccessTemplate = ({ title_left, title_right }) => {
    // Генерация блока с изображением
    const leftBlock = title_left
        .map(({ index, name_class, text_title }) => {
            return `
                <${index} class="${name_class}">${text_title}</${index}>
            `;
        })
        .join('');

    // Генерация блока с заголовками и текстом
    const rightBlock = title_right
        .map(({ index, name_class, text_title }) => {
            return `
                <${index} href="!#">
                    <button class="${name_class}">
                        ${text_title}
                    </button>
                </${index}>
            `;
        })
        .join('');

    // Объединение в одну структуру
    return `
        <div class="fon_gradient">
          <div class="left_gradient">
            ${leftBlock}
          </div>
          <div class="right_gradient">
            ${rightBlock}
          </div>
        </div>
    `;
};