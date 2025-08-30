import Image from "next/image";

/**
 * Takes an SVG source and returns a React component that renders that SVG.
 * The component will forward any props it receives to the underlying `next/image` component.
 *
 * @param {string} src The source of the SVG.
 * @returns {React.FunctionComponent<React.ComponentProps<typeof Image>>} The SVG component.
 */
export function svgToComponent(src) {
  const SvgComponent = (props) => (
    <Image
      src={src}
      alt={props.alt ?? ''}
      {...props}
    />
  );
  return SvgComponent;
}