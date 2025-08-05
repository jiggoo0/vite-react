export const streamChatMessage = async (
  message: string,
  onMessage: (chunk: string) => void,
  onError?: (err: string) => void
) => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: [{ role: "user", content: message }],
      }),
    });

    if (!response.body) throw new Error("ไม่มี response body");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n").filter(line => line.trim() !== "");
      buffer = "";

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.replace("data: ", "").trim();
          if (data === "[DONE]") return;

          try {
            const parsed = JSON.parse(data);
            const chunk = parsed.choices?.[0]?.delta?.content;
            if (chunk) onMessage(chunk);
          } catch (e) {
            if (onError) onError("⚠️ Parse error: " + e);
          }
        }
      }
    }
  } catch (err: any) {
    console.error("❌ streamChatMessage error:", err);
    if (onError) onError("⚠️ " + err.message);
  }
};