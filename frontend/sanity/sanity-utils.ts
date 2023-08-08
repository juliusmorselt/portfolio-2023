import { createClient, groq } from 'next-sanity';

export async function getExperience() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: 'production',
        apiVersion: '2023-07-07',
    });

    return client.fetch(
        groq`*[_type == "timeline"]{
            _id,
            _createdAt,
            categories[]{
                category,
                companies[]{
                    company,
                    from,
                    till,
                    description,
                    "image": image.asset->url
                }
            }
        }`,
    );
}

export async function getSkill() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: 'production',
        apiVersion: '2023-07-07',
    });

    return client.fetch(
        groq`*[_type == "skills"]{
            _id,
            _createdAt,
            categories[]{
                category,
                skills_array[]{
                    title,
                    description,
                    "image": image.asset->url
                }
            }
        }`
    );
}

export async function getAboutMe() {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: 'production',
        apiVersion: '2023-07-07',
    });

    return client.fetch(
        groq`*[_type == "aboutme"]{
            _id,
            _createdAt,
            name,
            description,
            "image": image.asset->url
        }`
    );
}
