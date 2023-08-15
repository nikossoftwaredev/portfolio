import { NextResponse } from 'next/server';
import { formatDate } from '@/utils/date';
import { sendViberMessage } from '@/app/api/viber-webhook/route';




const getFormattedText = (formData: any) => {
  const formattedText = Object.keys(formData)
    .map(key => {
      let value = formData[key];
      if (key === 'date') value = formatDate(value);
      return `*${key}* : ${value}`;
    })
    .join('\n')

    return formattedText;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formData } = body;

    const formattedText = getFormattedText(formData);
    await sendViberMessage(formattedText);

    return NextResponse.json({ text: 'ok' });
  } catch (e) {
    // throw new Error((e as any).message);
    const response = new NextResponse(null, { status: 401, statusText: (e as any).message });
    return response;
  }
}
