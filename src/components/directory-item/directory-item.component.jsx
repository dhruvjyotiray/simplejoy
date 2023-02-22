import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  
  return (
    <div key={category.id} className="directory-item-container">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      ></div>
      <div className="body">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
