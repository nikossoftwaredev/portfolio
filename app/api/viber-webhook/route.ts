export const sendViberMessage = async (text: string) => {
  const messageData = {
    receiver: "7wmYW23Ddo46PlaTeQj09Q==",
    type: "text",
    text
};

await fetch('https://chatapi.viber.com/pa/send_message', {
    method: 'POST',
    headers: {
      'X-Viber-Auth-Token' : '512e33906867e3dc-f3cf1fd5857baf6f-ed18aca7d282b85b'
    },
    body: JSON.stringify(messageData)
  }, )

};


export async function POST(request: Request) {
  try {
    const body = await request.json();

    if(body.event === 'message') {
      const {  sender } = body;
      const { id } = sender;

      await sendViberMessage(id)

    }


    return new Response('ok', { status: 200 });
  } catch (e) {
    return new Response((e as any).message, { status: 500 });
  }
}




