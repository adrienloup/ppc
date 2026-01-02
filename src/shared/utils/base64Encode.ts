export async function base64Encode(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const buffer = await crypto.subtle.digest('SHA-256', encoder.encode(password));
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}
