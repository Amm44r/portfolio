import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "My portfolio";

    return new ImageResponse(
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <img
          src="https://ammaarkhan.netlify.app/images/og-image.png"
          tw="w-[1200px] h-[628px]"
        />
        <h1 tw="text-4xl font-bold">{title}</h1>
      </div>,
      {
        width: 1200,
        height: 628,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}