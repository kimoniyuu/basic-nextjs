const url = "https://jsonplaceholder.typicode.com/todos";
const fetchTodos = async () => {
  const res = await fetch(url);
  const data = await res.json();
//   console.log(data);
    return data;
};
const AboutPage = async() => {
  const data = await fetchTodos();
  console.log(data);
  return <div>
    AboutPage
    {
        data.map((item,index) => {
            return <li key={index}>number{index+1} {item.title}</li>
        })
    }
    </div>;
};
export default AboutPage;
