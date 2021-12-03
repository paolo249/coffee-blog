import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
// import * as itemsAPI from '../../utilities/items-api';


export default function BlogList() {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(function() {

        (async function getPost() {
            const post = await fetch( 
                `https://jsonplaceholder.typicode.com/posts/${postId}`
                ).then((res) => res.json());

            setPost(post);
        })();
    }, []);

    return(
        <div>
        {post && (
          <>
            <h1>Post #{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    );
}


// import {useState, useEffect} from "react";
// import { useParams } from "react-router-dom";
// import {items} from "./seed";


// export default function BlogList() {
//     const [post, setPost] = useState([]);
      
    
//     return(
//       <div>
        
//       </div>
//     );
// }



 