import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `你是 "Rico"，理光中国（Ricoh China）客户门户的智能虚拟助手。
你的目标是协助客户（中小企业、大客户）和合作伙伴。
你可以提供以下帮助：
1. 产品选型（数码复合机、打印机、软件）。
2. 故障排除（如 SC300 等错误代码、卡纸）。
3. 查找门户网站上的导航路径。
4. 解释理光的可持续发展（ESG）举措。

语气：专业、乐于助人、简洁且礼貌。
如果你不知道答案，请建议他们通过“服务支持”页面联系人工客服。
请主要使用中文回答用户的问题。
`;

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("Gemini API Key is missing. Chat features will be simulated.");
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    // Fallback simulation if no key is present for demo purposes
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "我目前处于演示模式（无 API 密钥）。通常我会使用 Gemini 2.5 Flash 来回答：" + message;
  }

  try {
    const response: GenerateContentResponse = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "抱歉，我无法生成回复。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "连接服务器时出现问题，请稍后再试。";
  }
};