// import { groq } from 'next-sanity';
// import { client } from '@/lib/sanity.client';
// import { PortableText } from '@portabletext/react';
// import Image from 'next/image';
// import Link from 'next/link';

// const authorQuery = groq`
//   *[_type == "author" && slug.current == $slug][0] {
//     _id,
//     name,
//     slug,
//     designation,
//     image,
//     bio,
//     socialLinks
//   }
// `;

// const postsQuery = groq`
//   *[_type == "post" && author->slug.current == $slug] | order(publishedAt desc) {
//     _id,
//     title,
//     slug,
//     publishedAt,
//     description,
//     mainImage
//   }
// `;

// type Props = {
//     params: {
//         slug: string;
//     };
// };

// export default async function AuthorDetail({ params }: Props) {
//     const author: Author = await client.fetch(authorQuery, { slug: params.slug });
//     const posts: Post[] = await client.fetch(postsQuery, { slug: params.slug });

//     return (
//         <div className="container mx-auto px-4 py-12">
//             <div className="max-w-4xl mx-auto">
//                 <div className="flex flex-col md:flex-row gap-8 mb-12">
//                     {author.image && (
//                         <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
//                             <Image
//                                 src={author.image.asset.url}
//                                 alt={author.name}
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                     )}
//                     <div>
//                         <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
//                         <p className="text-xl text-gray-600 mb-4">{author.designation}</p>

//                         <div className="prose mb-6">
//                             <PortableText value={author.bio} />
//                         </div>

//                         {author.socialLinks && author.socialLinks.length > 0 && (
//                             <div className="flex gap-4">
//                                 {author.socialLinks.map((link) => (
//                                     <a
//                                         key={link.platform}
//                                         href={link.url}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="text-gray-600 hover:text-blue-600"
//                                     >
//                                         {link.platform === 'twitter' && <span>Twitter</span>}
//                                         {link.platform === 'linkedin' && <span>LinkedIn</span>}
//                                         {link.platform === 'github' && <span>GitHub</span>}
//                                         {link.platform === 'website' && <span>Website</span>}
//                                     </a>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <h2 className="text-2xl font-bold mb-6">Articles by {author.name}</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {posts.map((post) => (
//                         <div key={post._id} className="border rounded-lg overflow-hidden">
//                             {post.mainImage && (
//                                 <div className="relative h-40">
//                                     <Image
//                                         src={post.mainImage.asset.url}
//                                         alt={post.mainImage.alt || post.title}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>
//                             )}
//                             <div className="p-4">
//                                 <h3 className="text-lg font-semibold mb-2">
//                                     <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600">
//                                         {post.title}
//                                     </Link>
//                                 </h3>
//                                 <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.description}</p>
//                                 <span className="text-xs text-gray-500">
//                                     {new Date(post.publishedAt).toLocaleDateString()}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }