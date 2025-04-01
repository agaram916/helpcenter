import { PortableText } from "@portabletext/react";
import ImageUrlBuilder from "@sanity/image-url";
import client from "../../../lib/sanityClient";

const builder = ImageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).url();

export default async function BlogPage() {
  const query = `*[_type == "post"]{
    _id,
    title,
    body
  }`;
  const posts = await client.fetch(query, {}, { next: { revalidate: 10 } });
  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) return null;
        return (
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            <img
              src={urlFor(value)}
              alt="Icon"
              className="w-6 h-6 mx-1 align-middle"
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
          </span>
        );
      },
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-center font-bold text-3xl my-4">{children}</h1> // ✅ Always centered
      ),
      h2: ({ children }: any) => (
        <h2 className="text-left font-semibold text-2xl my-3">{children}</h2> // ✅ Always left-aligned
      ),
      normal: ({ children }: any) => (
        <p className="text-left text-lg leading-relaxed">{children}</p> // ✅ Always left-aligned
      ),
    },
  };
  
  return (
    <div className="inner-details">
      <section className="article-content">
        <div className="mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
          {posts.map((post: any) => (
            <div key={post._id} className="mb-8">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <div className="text-lg leading-relaxed">
                {/* ✅ Use components inside PortableText */}
                <PortableText value={post.body} components={components} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
