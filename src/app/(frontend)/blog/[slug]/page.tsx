// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { PortableText } from '@portabletext/react';
// import Image from 'next/image';

// const query = groq`
//   *[_type == "post" && slug.current == $slug][0] {
//     _id,
//     title,
//     slug,
//     description,
//     publishedAt,
//     mainImage,
//     body,
//     "author": author->{
//       name,
//       image,
//       bio,
//       designation,
//       slug
//     },
//     "categories": categories[]->title
//   }
// `;

// type Props = {
//     params: {
//         slug: string;
//     };
// };

// export default async function BlogDetail({ params }: Props) {
//     const post: Post = await client.fetch(query, { slug: params.slug });

//     return (
//         <article className="container mx-auto px-4 py-12">
//             <div className="max-w-3xl mx-auto">
//                 <div className="mb-8">
//                     <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//                     <p className="text-xl text-gray-600 mb-6">{post.description}</p>

//                     <div className="flex items-center gap-4 mb-6">
//                         {post.author.image && (
//                             <div className="relative w-12 h-12 rounded-full overflow-hidden">
//                                 <Image
//                                     src={post.author.image.asset.url}
//                                     alt={post.author.name}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                         )}
//                         <div>
//                             <Link
//                                 href={`/author/${post.author.slug.current}`}
//                                 className="font-semibold hover:text-blue-600"
//                             >
//                                 {post.author.name}
//                             </Link>
//                             <p className="text-sm text-gray-500">{post.author.designation}</p>
//                         </div>
//                     </div>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                         {post.categories?.map((category) => (
//                             <span key={category} className="bg-gray-100 px-3 py-1 text-sm rounded-full">
//                                 {category}
//                             </span>
//                         ))}
//                     </div>

//                     <span className="text-sm text-gray-500">
//                         Published on {new Date(post.publishedAt).toLocaleDateString()}
//                     </span>
//                 </div>

//                 {post.mainImage && (
//                     <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
//                         <Image
//                             src={post.mainImage.asset.url}
//                             alt={post.mainImage.alt || post.title}
//                             fill
//                             className="object-cover"
//                         />
//                     </div>
//                 )}

//                 <div className="prose max-w-none">
//                     <PortableText value={post.body} components={RichTextComponents} />
//                 </div>
//             </div>
//         </article>
//     );
// }