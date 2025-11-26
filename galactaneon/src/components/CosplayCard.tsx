interface CosplayCardProps {
  title: string;
}
const CosplayCard = (props:CosplayCardProps) => {
  return <div>
    <h2>{props.title}</h2>
  </div>;
};
export default CosplayCard;
