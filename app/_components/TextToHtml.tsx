const TextToHtml = ({
  text = "",
  className = "",
}: {
  text: string;
  className?: string;
}): JSX.Element => {
  return <p className={className} dangerouslySetInnerHTML={{ __html: text }} />;
};

export default TextToHtml;
