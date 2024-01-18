

const Card = ({ title, content }) => {
  return (
    <div className="bg-white p-4 shadow-md mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
