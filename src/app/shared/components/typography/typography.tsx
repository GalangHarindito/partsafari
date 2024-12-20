interface HeadingProps {
  type: string;
  children?: React.ReactNode;
  title: string;
  className?: string[];
}

export default function Typography(props: HeadingProps) {
  const { type, title, className } = props;
  let content;

  switch (type) {
    case 'H1':
      content = (
        <h1
          className={`${className?.join(' ') || ''} font-bold  xl:text-4xl lg:text-4xl md:text-2xl`}
        >
          {title}
        </h1>
      );
      break;
    case 'H2':
      content = (
        <h2
          className={`${className?.join(' ') || ''} font-bold  xl:text-3xl text-2xl`}
        >
          {title}
        </h2>
      );
      break;
    case 'H3':
      content = (
        <h3
          className={`${className?.join(' ') || ''} font-bold  xl:text-2xl lg:text-xl md:text-lg`}
        >
          {title}
        </h3>
      );
      break;
    case 'H4':
      content = (
        <h4
          className={`${className?.join(' ') || ''} font-bold  xl:text-xl lg:text-lg text-base`}
        >
          {title}
        </h4>
      );
      break;
    case 'H5':
      content = (
        <h5
          className={`${className?.join(' ') || ''} font-bold  xl:text-lg lg:text-base`}
        >
          {title}
        </h5>
      );
      break;
    case 'H6':
      content = (
        <h6 className={`${className?.join(' ') || ''} font-bold  xl:text-base`}>
          {title}
        </h6>
      );
      break;
    case 'p':
      content = <p className={`${className?.join(' ') || ''}`}>{title}</p>;
    default:
      content;
  }

  return <>{content}</>;
}
