import LastData from "../mockData/LastData";

export const LastHeader = ({ text }) => {
  return (
    <div className="Last_Head">
      <h1 className="Header_Last">{text}</h1>
    </div>
  );
};

export const LastButton = ({ text, href }) => {
  return (
    <div className="Last_Button">
      <a href={href} className="Last_Button1">
        {text}
      </a>
    </div>
  );
};

export const LastLeftEnd = ({ data }) => {
  return (
    <div className="Left_End">
      <div className="column">
        <h3 className="rg1">{data.title}</h3>
        <h7 className="rg2">{data.address}</h7>
        <h7 className="rg3">{data.rights}</h7>
      </div>
    </div>
  );
};

export const LastRightEnd = ({ data }) => {
  return (
    <div className="Right_End">
      {data.map((column, index) => (
        <div key={index} className="column">
          <h3 className="head_last">{column.title}</h3>
          {column.links.map((link, idx) => (
            <a key={idx} href={link.href} className="last_iteam">
              {link.text}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

const Last = () => {
  return (
    <section className="Last">
      <LastHeader text={LastData.header.text} />
      <LastButton text={LastData.button.text} href={LastData.button.href} />
      <div className="Last_End">
        <LastLeftEnd data={LastData.left_end} />
        <LastRightEnd data={LastData.right_end} />
      </div>
    </section>
  );
};

export default Last;
