const AboutDetailPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div>{id}AboutDetailPage</div>;
};
export default AboutDetailPage;
