import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import client from "../../../../lib/sanityClient";
import imageUrlBuilder from '@sanity/image-url';

// Define TypeScript interface for release notes
interface ReleaseNote {
  version: string;
  date: string;
  body: any[]; // PortableText content
}

const builder = imageUrlBuilder(client);

// export const getSanityImageUrl = (source: any) => {
//   return builder.image(source).url();
// }
// Fetch release note data based on slug
const getReleaseNote = async (slug: string): Promise<ReleaseNote | null> => {  
  const query = `*[_type == "release-notes" && slug.current == $slug][0]{
    version, date, body
  }`;

  const result = await client.fetch(query, { slug });

  return result || null;
}

export default async function ReleaseNotePage({ params }: { params: { slug: string } }) {
  const releaseNote = await getReleaseNote(params.slug);

  if (!releaseNote) {
    return notFound();
  }

  return (
    <div className="release-note">
      {/* <h1>Release Notes: Version {releaseNote.version}</h1>
      <p><strong>Release Date:</strong> {new Date(releaseNote.date).toLocaleDateString("en-US", { 
        month: "short", day: "2-digit", year: "numeric" 
      })}</p> */}

<div className="inner-details">
<section className="article-content">
        <PortableText
          value={releaseNote.body}
          components={{
            types: {
              image: ({ value }) => {
                if (!value?.asset?._ref) return null;
                //const imageUrl = getSanityImageUrl(value.asset);
                const imageUrl = "";

                const className = value.className || "";
                return (
                  <figure className={`inner-image ${className}`}>
                    <img src={imageUrl} alt={value.alt || "Article Image"} className={`p-0 my-3 ${className}`.trim()} />
                    {value.caption && <figcaption className="figure-caption text-center">{value.caption}</figcaption>}
                  </figure>
                );
              },
              table: ({ value }) => {
                if (!value?.rows || value.rows.length === 0) return null;
                const headerRow = value.rows[0];
                const bodyRows = value.rows.slice(1);
                return (
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          {headerRow.cells?.map((cell, index) => <th key={index}>{cell}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {bodyRows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.cells?.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              },
            },
            block: {
              h1: ({ children }) => <h1 className="text-center mb-3">{children}</h1>,
              h2: ({ children }) => <h2 className="text-left">{children}</h2>,
              h3: ({ children }) => <h3 className="text-left">{children}</h3>,
              normal:({ children }) => <p className="text-left">{children}</p>,
              li: ({ children }) => <li className="text-left">{children}</li>,
            },
            marks: {
              color: ({ children, value }) => <span style={{ color: value?.hex || "black" }}>{children}</span>,
              largeText: ({ children }) => <span style={{ fontSize: "20px", fontWeight: "bold" }}>{children}</span>,
            },
          }}
        />
      </section>
   </div>

      {/* <a href="/release-notes">← Back to all release notes</a> */}  
    </div>
  );
}
