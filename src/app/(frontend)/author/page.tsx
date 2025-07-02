// import { groq } from 'next-sanity';
// import { client } from '@/lib/sanity.client';
// import { Author } from '@/types';
// import Link from 'next/link';
// import Image from 'next/image';

// const query = groq`
//   *[_type == "author"] {
//     _id,
//     name,
//     slug,
//     designation,
//     image,
//     bio
//   }
// `;

// export default async function AuthorList() {
//     const authors: Author[] = await client.fetch(query);

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold mb-8">Our Authors</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {authors.map((author) => (
//                     <div key={author._id} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
//                         <div className="flex items-center gap-4 mb-4">
//                             {author.image && (
//                                 <div className="relative w-16 h-16 rounded-full overflow-hidden">
//                                     <Image
//                                         src={author.image.asset.url}
//                                         alt={author.name}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 </div>
//                             )}
//                             <div>
//                                 <h2 className="text-xl font-bold">
//                                     <Link href={`/author/${author.slug.current}`} className="hover:text-blue-600">
//                                         {author.name}
//                                     </Link>
//                                 </h2>
//                                 <p className="text-gray-600">{author.designation}</p>
//                             </div>
//                         </div>
//                         <p className="text-gray-700 line-clamp-3">{author.bio}</p>
//                         <Link
//                             href={`/author/${author.slug.current}`}
//                             className="inline-block mt-4 text-blue-600 hover:text-blue-800"
//                         >
//                             View profile →
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }