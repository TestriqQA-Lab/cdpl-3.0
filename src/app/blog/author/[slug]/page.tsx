import { notFound } from "next/navigation";
import { Metadata } from "next";
import { generateMetadata as generateCentralMetadata } from "@/lib/metadata-generator";
import { getAuthorById, getPostsByAuthorId, AUTHORS } from "@/data/BlogPostData";
import { AuthorPageContent } from "@/components/blog/AuthorPageContent";

// SSG: Generate pages for all authors
export async function generateStaticParams() {
    return Object.keys(AUTHORS).map((slug) => ({
        slug,
    }));
}

// SEO: Generate metadata

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const author = getAuthorById(slug);

    if (!author) {
        return {
            title: "Author Not Found",
        };
    }

    return generateCentralMetadata({
        title: `${author.name} - Author at CDPL`,
        description: `Read articles and tutorials by ${author.name}, ${author.role} at CDPL. ${author.bio.slice(0, 150)}...`,
        url: `/blog/author/${slug}`,
        image: author.avatar,
        type: 'article', // Using article/website type, best fit
        author: author.name,
    });
}

// Page Component
export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const author = getAuthorById(slug);

    if (!author) {
        notFound();
    }

    const posts = getPostsByAuthorId(slug);

    return <AuthorPageContent author={author} posts={posts} />;
}
