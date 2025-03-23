
export default async function getCoworkings(): Promise<CoworkingJson> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/coworkings`, { mode: 'no-cors' })
    if (!response.ok) {
        throw new Error("Failed to fetch coworkings")
    }
    return await response.json() as CoworkingJson
}