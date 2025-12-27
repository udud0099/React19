import { useGetPostsQuery } from "./services/jsonplaceholderApi";



function App() {
const {data, error, isLoading} = useGetPostsQuery();
  return (
    <>
      <h1 className="text-4xl text-red-900">hello</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error occurred</p>}
      {data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h2 className="text-2xl">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
