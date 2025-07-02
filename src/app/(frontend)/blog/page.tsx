import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from "@/sanity/lib/image";

type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage?: {
        asset: { url: string };
        alt?: string;
    };
    categories?: string[];
    description?: string;
    publishedAt: string;
    author?: string;
};

export default async function BlogList() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: Post) => (
                    <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {post.mainImage && (
                            <div className="relative h-48">
                                <Image
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.mainImage.alt || post.title}
                                    className="object-cover"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        )}
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {post.categories?.map((category: string) => (
                                    <span key={category} className="bg-gray-100 px-2 py-1 text-xs rounded">
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-xl font-bold mb-2">
                                <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 mb-4">{post.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    {/* <Image
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.mainImage.alt || post.title}
                                        className="object-cover"
                                        width={60}
                                        height={60}
                                    /> */}
                                    <span className="text-sm text-gray-700">{post.author}</span>
                                    {" . " + new Date(post.publishedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}