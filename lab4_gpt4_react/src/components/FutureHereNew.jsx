import futureHereNewData from "../mockData/futureHereNewData";

export const LeftContainer = ({ images }) => {
  return (
    <div className="left_container_future">
      {images.map((img, index) => (
        <img key={index} src={img.scr} alt={img.alt} />
      ))}
    </div>
  );
};

export const RightContainer = ({ title }) => {
  return (
    <div className="right_container_future">
      {title.map((item, index) => {
        const Tag = item.index; // Динамический HTML-тег (h4, h2, a и т. д.)

        return Tag === "a" ? (
          <Tag key={index} href="#" className={item.name_class}>
            {item.text_title}
          </Tag>
        ) : (
          <Tag key={index} className={item.name_class}>
            {item.text_title}
          </Tag>
        );
      })}
    </div>
  );
};

const FutureHereNew = () => {
  return (
    <section className="section future_here_new">
      <LeftContainer images={futureHereNewData.images} />
      <RightContainer title={futureHereNewData.title} />
    </section>
  );
};

export default FutureHereNew;