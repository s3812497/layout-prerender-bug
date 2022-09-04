//export const prerender = true

import type { LayoutServerLoad } from './$types'
export const load: LayoutServerLoad = async ({ params }) => {
    
    const number: string = params.number

    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.number}`)

    const episode: {
        [key: string]: string | number
    } = await request.json()
    return {
        number,
        episode
    }

}
