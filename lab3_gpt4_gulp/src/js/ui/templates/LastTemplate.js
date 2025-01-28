export const LastTemplate = ({ last_head, last_button, left_end, right_end_text, right_end_href }) => {
    const Last_Head = last_head
        .map(({ index_text, class_name, title_text }) => {
            return `
                <div class="Last_Head">
                    <${index_text} class="${class_name}">${title_text}</${index_text}>
                </div>
            `;
        })
        .join('');

    const Last_Button = last_button
        .map(({ href_link, href_classname, href_text }) => {
            return `
                <div class="Last_Button">
                    <a href="${href_link}" class="${href_classname}">${href_text}</a>
                </div>
            `;
        })
        .join('');

    const Left_End_Text = left_end
        .map(({ index, classname, text}) => {
            return `
                <${index} class="${classname}">${text}</${index}>
            `;
        })
        .join('');

        const Right_End_Text = right_end_text
        .map((textData, index) => {
            const linksData = right_end_href[index]; // Получаем соответствующие ссылки по индексу
            return `
                <div class="column">
                    <${textData.index_text} class="${textData.classname_text}">${textData.text_text}</${textData.index_text}>
                    <a href="${linksData.href_link1}" class="${linksData.classname_link1}">${linksData.text_link1}</a>
                    <a href="${linksData.href_link2}" class="${linksData.classname_link2}">${linksData.text_link2}</a>
                    <a href="${linksData.href_link3}" class="${linksData.classname_link3}">${linksData.text_link3}</a>
                    ${linksData.href_link4 ? `<a href="${linksData.href_link4}" class="${linksData.classname_link4}">${linksData.text_link4}</a>` : ''}
                </div>
            `;
        })
        .join('');

    return `
        ${Last_Head}
        ${Last_Button}
        <div class="Last_End">
            <div class="Left_End">
                <div class="column">
                    ${Left_End_Text}
                </div>
            </div>
            <div class="Right_End">
                ${Right_End_Text}
            </div>
        </div>
    `;
};