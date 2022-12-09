export const Heading = (props: { date: Date }) => {
  return (
    <div className="heading">
      <h3>Countdown Till</h3>
      <h1>{props.date.getFullYear()}</h1>
    </div>
  );
};
