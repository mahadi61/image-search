const SingleImage = ({ image }) => {
  return (
    <div className="">
      <img className="w-full" src={image.largeImageURL} alt="" />
    </div>
  );
};

export default SingleImage;
