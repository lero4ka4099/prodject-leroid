import {useEffect, useState} from "react";

const Page = () => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = () => new Promise((resolve, reject) => {
            const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
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
            <h1>Page</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>



    )
}
export default Page