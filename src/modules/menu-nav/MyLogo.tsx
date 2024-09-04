import myLogo from "../../assets/img/logo-ysb.png";

type MyLogoProps = {
  widthProps?: string;
};
const MyLogo = ({ widthProps = "150px" }: MyLogoProps) => {
  return <img src={myLogo} alt="YSB logo" width={widthProps} />;
};

export default MyLogo;
