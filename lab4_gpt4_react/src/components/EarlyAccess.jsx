import EarlyAccessData from "../mockData/earlyaccessData.js";

export const LeftContainer = ({ left_gradient_txt }) => {
    return (
        <div className="left_gradient">
            {left_gradient_txt.map((item, index) => {
            const Tag = item.index; // Динамическое имя тега
            return <Tag key={index} className={item.class_name}>{item.text}</Tag>;
            })}
        </div>
    );
  }

export const RightContainer = ({right_gradient_btn}) => {
    return(
        <div className="right_gradient">
            {right_gradient_btn.map((item, index) => (
                <a key={index} href={item.href}>
                    <button className={item.name_class}>{item.text}</button>
                </a>
            ))}
        </div>
    );
}


const EarlyAccess = () => {
    return(
        <div className="fon_gradient">
            <LeftContainer left_gradient_txt={EarlyAccessData.left_gradient_txt} />
            <RightContainer right_gradient_btn={EarlyAccessData.right_gradient_btn} />
        </div>
    );
};

export default EarlyAccess;