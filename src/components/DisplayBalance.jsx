import React from "react";
import { Statistic } from "semantic-ui-react";

export const DisplayBalance = ({ color="black", title, value, size="tiny" }) => {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label>{title}</Statistic.Label>
      <Statistic.Value>{isNaN(value) ? 0 : value}</Statistic.Value>
    </Statistic>
  );
};
