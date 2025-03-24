export default async function makeReview({ rating, comment, coworkingID }
    : { rating: number, comment: string, coworkingID: string }) {
    console.log("Sending Review Data:", { rating, comment });
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("No authentication token found. Please log in.");
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/coworkings/${coworkingID}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify({
            rating,
            comment
        }),
    })
    if (!response.ok) {
        throw new Error("Failed to make a review")
    }
    return await response.json()
}