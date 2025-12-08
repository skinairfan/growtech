


function Image({ src, width = 153, className = "", style = {} }) {
  return (
    <div className="images">
      <img src={src} width={width} style={style}  className={className} />
    </div>
  );
}

export default Image;

