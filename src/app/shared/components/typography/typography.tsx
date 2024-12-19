interface HeadingProps {
  type: string;
  children?: React.ReactNode;
  className?: string[];
}

export default function Typography(props: HeadingProps) {
  const { type, children, className } = props;
  let content;

  switch (type) {
    case "H1":
      content = <h1 className={`${className?.join(" ") || ''} font-bold  xl:text-4xl lg:text-4xl md:text-2xl`}>{children}</h1>;
      break;
    case "H2":
      content = <h2 className={`${className?.join(" ") || ''} font-bold  xl:text-3xl lg:text-2xl md:text-xl`}>{children}</h2>;
      break;
    case "H3":
      content = <h3 className={`${className?.join(" ") || ''} font-bold  xl:text-2xl lg:text-xl md:text-lg`}>{children}</h3>;
      break;
    case "H4":
      content = <h4 className={`${className?.join(" ") || ''} font-bold  xl:text-xl lg:text-lg`}>{children}</h4>;
      break;
    case "H5":
      content = <h5 className={`${className?.join(" ") || ''} font-bold  xl:text-lg lg:text-base`}>{children}</h5>;
      break;
    case "H6":
      content = <h6 className={`${className?.join(" ") || ''} font-bold  xl:text-base`}>{children}</h6>;
      break;
    case "p":
        content = <p className={`${className?.join(" ") || ''}`}>{children}</p>
    default:
      content
  }

  return <>{content}</>;
}

