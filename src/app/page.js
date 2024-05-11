const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog/posts", {
    headers: {
      'Content-type': 'application/json',
    }
  })

  const posts = await res.json();
  return posts;
}




export default async function Home() {
  const allPosts = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        allPosts.data.map((item, index) => (
          <>
            <div key={index}>
              <strong> <h1 className="text-yellow-500"> {item.id} </h1> </strong>
              <strong><h1 className="text-yellow-500"> {item.title} </h1></strong>
              <h1> {item.body} </h1>
            </div>
            <br />
          </>
        ))
      }
    </main>
  );
}
