import React from 'react';
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './PostCard.css';
// import {image} from "../../images";


export default function PostCard({post}) {

  const images = [
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
     
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
     
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
     
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/xFw9RXKZDvevAGocgBK0zteto4U.jpg",

    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",

    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
    
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg",
 
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg",
    
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/1MpWjcCn8M0763QDoxcN0gXrc5q.jpg",
   
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
   
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
 
    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/qIegbn6DSUYmggfwxOBNOVS35q.jpg",

    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",

    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/pvnPgukFyEKgCzyOxyLiwyZ8T1C.jpg",

    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/hbH8oXJZPwcYxaa1JrUMq4ogg7G.jpg",

    },
    {
    image_path:
        "https://image.tmdb.org/t/p/w500/bsg0mrxUKyJoL4oSGP5mlhEsqp.jpg",

    }
  ];
  const date = Date(post.createdAt).toString().substr(3,13);
  const time = Date(post.createdAt).toString().substr(15,14);


  return(
    <Link to= {`/posts/${post._id}`} id="card" >
      
        <div
         className = "postcard"
        //  style={{
        //   background: `url(${images[0]})  no-repeat center`,
        //   WebkitBackgroundSize: "cover"
        // }}
         >
        <img src= 'https://i.imgur.com/fEy0Qzg.jpg' width="595" height="400"/> 

          <br/>
          {post.name}
          <br/>
          {date}
          <br/>
          {time}
        </div>
        </Link>
    );


}