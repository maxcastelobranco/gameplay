import React from "react";

import { Box, Text } from "../../theme";

import { useStyles } from "./styles";

interface ListHeaderProps {
  title: string;
  total: number;
}

const ListHeader: React.FC<ListHeaderProps> = ({ title, total }) => {
  const { containerStyles, titleStyles, totalStyles } = useStyles();

  return (
    <Box {...containerStyles}>
      <Text {...titleStyles}>{title}</Text>
      <Text {...totalStyles}>Total {total}</Text>
    </Box>
  );
};

export default ListHeader;
