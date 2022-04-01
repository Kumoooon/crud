function Line(props) {
  const detailPage = () => {
    console.log("click");
    this.props.history.push(`/detail${this.props.id}`);
  };
  return (
    <div onClick={this.detailPage}>
      <h3>{props.a.id}</h3>
      <h4>{props.a.name}</h4>
    </div>
  );
}
export default Line;
