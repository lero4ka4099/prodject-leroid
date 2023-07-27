import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Pages = () => {

    const [posts, setPosts] = useState([]);

      useEffect(() => {
          const getAllPosts = () => new Promise((resolve, reject) => {
            const response = fetch('https://jsonplaceholder.typicode.com/posts');
            resolve(response);
            reject("Failed");
          });
          getAllPosts()
              .then((response) => {
                  const data = response.json();
                  return data;
              })
              .then((data) => {
                  setPosts(data);
                  return data;

              })
              .catch((error) => new Error(error));

      }, [])
    return (
        <div>
            <h1>Pages</h1>
            <ul>
                {posts && posts.map((i) =>
                    <li key={i.id}>
                        <Link className='post-title' to={`/products/${i.id}`}>{i.title}</Link>
                        <p>{i.body}</p>
                    </li>
                )}
            </ul>

        </div>

    )
}
export default Pages