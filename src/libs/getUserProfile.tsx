export default async function getUserProfile(token: string) {
    const response = await fetch("https://backend-coworking.vercel.app//api/v1/auth/me", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        },
        mode: 'no-cors'
    })
    if (!response.ok) {
        throw new Error("Failed to fetch user Profile")
    }
    const userData = await response.json();

    // ✅ Save token in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user info (optional)

    return userData;
}
