import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  if (!post) {
    return <div>Post not available</div>;
  }

  const { img, title, createdAt, body, slug } = post;

  return (
    <div className={styles.container}>
      {img ? (
        <div className={styles.top}>
          <Image
            src={img}
            alt={title || "Post Image"}
            layout="responsive"
            width={400}
            height={350}
            className={styles.image}
          />
          <span className={styles.date}>
            {createdAt
              ? new Date(createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Date not available"}
          </span>
        </div>
      ) : (
        <div className={styles.top}>
          <div className={styles.imagePlaceholder}>No Image</div>
        </div>
      )}
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title || "No Title"}</h1>
        <p className={styles.desc}>{body || "No description available"}</p>
        <Link href={`/blog/${slug}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

const PostList = () => {
  const samplePosts = [
    {
      img: "https://images.pexels.com/photos/1114257/pexels-photo-1114257.jpeg",
      createdAt: "2024-09-07T12:00:00Z",
      title: "Exploring the Mountains",
      body: "Discover the beauty of mountain landscapes and the serenity they offer.",
      slug: "exploring-the-mountains",
    },
    {
      img: "https://images.pexels.com/photos/23492/pexels-photo.jpg",
      createdAt: "2024-09-06T08:00:00Z",
      title: "A Walk Through the Forest",
      body: "Experience the tranquility of a peaceful forest walk.",
      slug: "a-walk-through-the-forest",
    },

    {
      "img": "https://images.pexels.com/photos/1632128/pexels-photo-1632128.jpeg",
      "createdAt": "2024-09-06T11:15:00Z",
      "title": "Serene Forest",
      "body": "Discover the tranquility of a lush, green forest.",
      "slug": "serene-forest"
    },
    {
      "img": "https://images.pexels.com/photos/33652/pexels-photo.jpg",
      "createdAt": "2024-09-08T08:20:00Z",
      "title": "Snowy Peaks",
      "body": "Enjoy the beauty of snow-covered mountain tops.",
      "slug": "snowy-peaks"
    },
    {
      "img": "https://images.pexels.com/photos/1632128/pexels-photo-1632128.jpeg",
      "createdAt": "2024-09-09T09:30:00Z",
      "title": "Autumn Leaves",
      "body": "Admire the vibrant hues of autumn foliage.",
      "slug": "autumn-leaves"
    },
    {
      "img": "https://images.pexels.com/photos/1724916/pexels-photo-1724916.jpeg",
      "createdAt": "2024-09-09T13:10:00Z",
      "title": "Starry Night",
      "body": "Gaze at the stunning star-filled night sky.",
      "slug": "starry-night"
    },
    {
      "img": "https://images.pexels.com/photos/1632128/pexels-photo-1632128.jpeg",
      "createdAt": "2024-09-10T11:30:00Z",
      "title": "River Serenity",
      "body": "Enjoy the calm and peaceful flow of a river.",
      "slug": "river-serenity"
    },
   

    {
      "img": "https://images.pexels.com/photos/1632128/pexels-photo-1632128.jpeg",
      "createdAt": "2024-09-06T11:15:00Z",
      "title": "Serene Forest",
      "body": "Discover the tranquility of a lush, green forest.",
      "slug": "serene-forest"
    },
 
    {
      "img": "https://images.pexels.com/photos/1632128/pexels-photo-1632128.jpeg",
      "createdAt": "2024-09-09T09:30:00Z",
      "title": "",
      "body": "Admire the vibrant hues of autumn foliage.",
      "slug": "autumn-leaves"
    },
    {
      "img": "https://images.pexels.com/photos/1724916/pexels-photo-1724916.jpeg",
      "createdAt": "2024-09-09T13:10:00Z",
      "title": "Starry Night",
      "body": "Gaze at the stunning star-filled night sky.",
      "slug": "starry-night"
    },
  
  ];

  return (
    <div className={styles.grid}>
      {samplePosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;
