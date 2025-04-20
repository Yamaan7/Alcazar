declare interface ITypography {
  fs?: number;
  fw?: number;
  center?: boolean;
  normal?: boolean;
}


import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";

type Props = TextProps & ITypography;

const { Text: AntdText } = Typography;
const Text = ({
  fs,
  fw = 400,
  color,
  center,
  style,
  normal = false,
  ...props
}: Props) => (
  <AntdText
    style={{
      fontSize: fs || style?.fontSize || 16,
      fontWeight: fw,

      textAlign: center ? "center" : style?.textAlign || "left",
      ...(normal && { lineHeight: "normal" }),
      ...style,
    }}
    {...props}
  />
);

export default Text;