import React from 'react'
import blogData from "../../lib/blogData";
import Link from 'next/link';
import styles  from "../blog/blog.module.css";

export default function Blog() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>This is Blog Post's page</h1>
      <div className={styles.post}>
        {blogData.map((data)=>{
          return (
            <p key={data.id} className={styles.postPara}>Id: {data.id}  <Link href={{pathname:"/post",query:{id:data.id}}}>{data.title}</Link></p>
          )
        })}
      </div>
    </div>
    
  )
}
