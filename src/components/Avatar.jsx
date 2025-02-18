import defaultImg from "../assets/default-avatar.png";
import { DropdownArrow } from "../icons";

const Avatar = (props) => {
  const { imgSrc, menu, ...restProps } = props;
  return (
    <div className="avatar items-center cursor-pointer">
      <div {...restProps}>
        <img src={imgSrc ? imgSrc : defaultImg} alt="avatar" />
      </div>
      {menu && <DropdownArrow className="absolute -bottom-2 -right-1 w-4" />}
    </div>
  );
};
export default Avatar;
