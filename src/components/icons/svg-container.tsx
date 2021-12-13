import { SVGAttributes } from "react";
export type OmitKeys<T, K extends keyof T> = Omit<T, K>;
export type SvgProps = OmitKeys<
  SVGAttributes<SVGGElement>,
  "width" | "height" | "children"
> & {
  size?: string | number;
  dataTitle?: string;
};

type SvgContainerProps = OmitKeys<
  SVGAttributes<SVGGElement>,
  "width" | "height"
> & {
  size?: string | number;
  dataTitle?: string | number;
};

const DEFAULT_ICON_SIZE = "1rem";
export const SvgContainer = ({
  children,
  size = DEFAULT_ICON_SIZE,
  dataTitle,
  ...props
}: SvgContainerProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      preserveAspectRatio="xMinYMin"
      width={size}
      height={size}
      style={{ ...props.style, display: "inline-block" }}
      data-title={dataTitle}
    >
      <title>{dataTitle}</title>
      {children}
    </svg>
  );
};
