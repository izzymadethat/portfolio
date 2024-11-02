const EducationCard = ({ item }) => {
  return (
    <div className="education-card">
      <h3 className="degree-title">{item.degree}</h3>
      <h4 className="institution">{item.institution}</h4>
      <p className="year">{item.year}</p>
      <p className="description">{item.description}</p>
    </div>
  );
};
export default EducationCard;
