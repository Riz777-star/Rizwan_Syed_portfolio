
import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import { ProjectPageContent } from '@/components/projects/ProjectPageContent';
import { createPageMetadata } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = portfolioData.projects.find((item) => item.slug === slug);
    if (!project) notFound();

    return createPageMetadata({
        title: project.title,
        description: project.description,
        path: `/projects/${project.slug}/`,
        image: project.image,
        imageAlt: project.image ? project.title : undefined,
    });
}

export async function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const updatedProject = {
        ...project,
        galleryImages: project.galleryImages?.length
            ? project.galleryImages
            : project.image
                ? [project.image]
                : [],
    };

    return <ProjectPageContent project={updatedProject} />;
}
