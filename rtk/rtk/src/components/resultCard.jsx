const ResultCard = ({ item, activeTab }) => {
  return (
    <>
      <div >
        {activeTab == "photos" ? (
          <div className="w-full">
            <h1>{item.title}</h1>
            <img src={item.src} alt="" />
          </div>
        ) : activeTab == "videos" ? (
          <div className="w-full">
            <h1>{item.title}</h1>
            <video width="320" height="240" controls>
              <source src={item.src} type="video/mp4" />
            </video>
          </div>
        ) : activeTab == "gif" ? (
          <div className="w-full">
            <h1>{item.title}</h1>
            <img src={item.src} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ResultCard;
