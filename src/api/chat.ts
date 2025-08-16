// src/api/chat.ts

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export type StreamCallback = (chunk: string) => void;
export type ErrorCallback = (errorMessage: string) => void;

export const streamChatMessage = async (
  message: string,
  onMessage: StreamCallback,
  onError?: ErrorCallback,
): Promise<void> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${errorText}`);
    }

    if (!response.body) {
      throw new Error('ไม่มี response body จาก API');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n').filter((line) => line.trim() !== '');
      buffer = '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.replace('data: ', '').trim();

          if (data === '[DONE]') return;

          try {
            const parsed = JSON.parse(data);
            const chunk: string | undefined = parsed.choices?.[0]?.delta?.content;

            if (chunk) {
              onMessage(chunk);
            }
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : 'เกิดข้อผิดพลาดในการแปลงข้อมูล';
            console.error('⚠️ JSON Parse Error:', errorMessage);
            onError?.(`⚠️ Parse error: ${errorMessage}`);
          }
        }
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'เกิดข้อผิดพลาดไม่ทราบสาเหตุ';
    console.error('❌ streamChatMessage error:', errorMessage);
    onError?.(`⚠️ ${errorMessage}`);
  }
};
