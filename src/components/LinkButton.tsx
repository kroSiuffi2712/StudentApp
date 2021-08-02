import { Link } from "react-router-dom";

interface Props {
    title:string;
    divStyle:string;
    LinkStyle:string;
    to:string;
  }

const LinkButton = (props:Props) => {
  const { title, divStyle, LinkStyle, to } = props;
  return (
    <div className={`${divStyle}`}>
      <Link className={`btn btn-primary ${LinkStyle}`} to={to}>
        {title}
      </Link>
    </div>
  );
};
export default LinkButton;