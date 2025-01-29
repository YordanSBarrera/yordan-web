import { Stack, Typography } from "@mui/material";
import { bgDarkCard } from "../../utils/const";
import MyLogo from "../../components/MyLogo";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Stack
      textAlign="center"
      bgcolor={bgDarkCard}
      color="#fff"
      borderRadius={1}
      width="100%"
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <MyLogo widthProps="120px" />
      <Typography variant="body2">{t("footer")}</Typography>
    </Stack>
  );
};
export default Footer;
