import { AspectRatioBox, Box, Flex } from "@chakra-ui/core";

const URL_GOOGLE_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64667009123!2d108.1716864655803!3d16.04716590690545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1597263425979!5m2!1svi!2s";

export default function GoogleMap() {
  return (
    <AspectRatioBox ratio={16 / 9}>
      <Box padding="5rem" as="iframe" src={`${URL_GOOGLE_MAP}`} alt="map" />
    </AspectRatioBox>
  );
}
