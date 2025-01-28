export const BlogTemplate = ({ Blog_Head_Text, Blog_Left_img, Blog_Left_title, Blog_Right_img, Blog_Right_title }) => {

    // Обработка заголовков
    const head_text = Blog_Head_Text
        .map(({ index, text }) => {
            return `
                <div class="Head_Text">
                    <${index}>${text}</${index}>
                </div>
            `;
        })
        .join('');  // Преобразуем в строку, избегая ненужных пробелов между элементами
    
    // Обработка изображений левой части
    const blog_left_img = Blog_Left_img
        .map(({ classname, src, alt }) => {
            return `
                <img
                    class="${classname}"
                    src="${src}"
                    alt="${alt}"
                />
            `;
        })
        .join('');  // Преобразуем в строку, избегая ненужных пробелов между элементами
    
    // Обработка заголовков левой части
    const blog_left_title = Blog_Left_title
        .map(({ div_class_name, index_title, title_name, title_text }) => {
            return `
                <div class="${div_class_name}">
                    <${index_title} class="${title_name}">${title_text}</${index_title}>
                </div>
            `;
        })
        .join('');  // Преобразуем в строку, избегая ненужных пробелов между элементами
    
    // Обработка элементов правой части
    const blog_right = Blog_Right_img
        .map((imgData, index) => {
            const title_data = Blog_Right_title[index]; // Получаем соответствующие данные из Blog_Right_title по индексу
            return `
                <div class="blog_item">
                    <img
                        class="${imgData.classname}"
                        src="${imgData.src}"
                        alt="${imgData.alt}"
                    />
                    <div class="blog_item_right">
                        <${title_data.index_title1} class="${title_data.class_name1}">${title_data.title_text1}</${title_data.index_title1}>
                        <${title_data.index_title2} class="${title_data.class_name2}">${title_data.title_text2}</${title_data.index_title2}>
                        <a href="${title_data.href_link}" class="${title_data.href_classname}">${title_data.href_text}</a>
                    </div>
                </div>
            `;
        })
        .join('');  // Преобразуем в строку, избегая ненужных пробелов между элементами
    
    // Возвращаем итоговую разметку
    return `
        ${head_text}
        <div class="Blog_Bottom">
            <div class="Blog_Left">
                ${blog_left_img}
                <div class="text_left_back">
                    ${blog_left_title}
                </div>
            </div>
            <div class="Blog_Right">
                ${blog_right}
            </div>
        </div>
    `;
};
