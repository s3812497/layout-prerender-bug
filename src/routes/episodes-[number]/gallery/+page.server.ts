// export const prerender = true
import type { PageServerLoad } from './$types'
export const load:PageServerLoad = async ({ params }) => {
    
    const request = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.number}/photos`)

    const gallery: {
        [key: string]: string | number
    }[] = await request.json()
    
    return {
        gallery
    }

}
