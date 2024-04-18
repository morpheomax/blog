import { getCollection } from "astro:content"

export async function getAllTags (){
const posts = await getCollection ("blog")

const uniqueTags = Array.from (
    new Set(
        posts.flatMap(post => post.data.tags.map(tag=> tag.toLowerCase()))
    )
)


return uniqueTags.sort()


}