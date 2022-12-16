import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { textStyle } from "./textStyle";

const theme = extendTheme({
  textStyle,
  colors,
});

export { theme };
