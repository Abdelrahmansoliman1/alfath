import * as React from "react";
import { Html, Text } from "@react-email/components";

export function Email(props: { massage: string }) {
  const { massage } = props;

  return (
    <Html lang="en">
      <Text>{massage}</Text>
    </Html>
  );
}

export default Email;
