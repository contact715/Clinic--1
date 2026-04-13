
import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Gemini API client lazily
let ai: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI | null => {
  if (ai) return ai;

  const apiKey = process.env.API_KEY;
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
    return ai;
  }
  console.warn("Gemini API Key is missing. AI features will be disabled.");
  return null;
};

/**
 * Generates a "Los Angeles" themed sky/backdrop.
 */
export const generateLABackground = async (): Promise<string | null> => {
  try {
    // Ensure we use the latest key if available
    const client = getAiClient();
    if (!client) return null;

    // Update the local reference if needed (though getAiClient handles singleton)
    ai = client;

    const model = 'gemini-2.5-flash-image';
    const prompt = `
      A breathtaking abstract vector art background of a Los Angeles sky at sunset.
      Colors: Deep purple/blue at top fading to warm oranges and golden yellows.
      Style: Clean, flat vector style, noise texture.
      Composition: Panoramic, wide, minimal details.
    `;

    const response = await client.models.generateContent({
      model: model,
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "16:9" } }
    });

    for (const candidate of response.candidates || []) {
      for (const part of candidate.content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

/**
 * Generates an animated video loop of the neighborhood using Veo.
 */
export const generateLAVideo = async (): Promise<string | null> => {
  try {
    // Check for API Key selection as required for Veo
    if (window.aistudio && !await window.aistudio.hasSelectedApiKey()) {
      await window.aistudio.openSelectKey();
    }

    // Re-initialize with the potentially new key
    const client = getAiClient();
    if (!client) return null;
    ai = client;

    const prompt = `
      Vector art animation of a charming Los Angeles neighborhood on a gentle hill at sunset.
      Style: High-quality flat vector illustration, similar to Airbnb or Headspace art style.
      Elements: Spanish colonial homes with terracotta roofs, modern white houses, swaying palm trees.
      Lighting: Golden hour, warm oranges and purples, silhouettes of hills in background.
      Motion: Gentle swaying of trees, subtle clouds moving, cinematic slow pan.
      Atmosphere: Peaceful, premium, clean.
    `;

    let operation = await client.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Check every 5 seconds
      operation = await client.operations.getVideosOperation({ operation: operation });
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (videoUri) {
      // Append key for download access
      return `${videoUri}&key=${API_KEY}`;
    }

    return null;

  } catch (error) {
    console.error("Error generating video:", error);
    return null;
  }
};

/**
 * Creates a chat session for the AI Dispatcher.
 */
export const createChatSession = (): Chat => {
  // Re-initialize to ensure latest key is used
  const client = getAiClient();
  if (!client) {
    throw new Error("API Key missing for chat session");
  }
  ai = client;

  return client.chats.create({
    model: 'gemini-2.0-flash',
    config: {
      systemInstruction: `You are a helpful assistant for Cool Doc HVAC Service in San Fernando Valley, CA.

Business info:
- Phone: (818) 731-0445
- License: CSLB C-20
- Policy: No fix, no fee. 90-day warranty on parts and labor.
- Service area: Tarzana, Woodland Hills, Encino, Sherman Oaks, Studio City, Burbank, North Hollywood, Van Nuys, Northridge, Glendale, and most of LA County.

You only answer questions about HVAC services, Cool Doc HVAC, or topics directly related to:
- AC repair and installation
- Heating and furnace repair
- Ductless mini-split installation (Mitsubishi, Daikin, Fujitsu, LG, and other brands)
- Air quality and filtration
- Heat pumps
- HVAC maintenance plans and tune-ups
- Scheduling service or getting a quote
- Service area coverage

If someone asks about anything unrelated to HVAC or Cool Doc HVAC, respond with:
"I can only help with HVAC-related questions. For anything else, give us a call at (818) 731-0445."

Never make up specific prices. If asked about cost, say:
"Pricing depends on the job. Call us at (818) 731-0445 for a free estimate — there's no obligation."

Be friendly, clear, and concise. Do not use robotic jargon. Do not claim to book appointments — direct people to call (818) 731-0445 or use the contact form on the site.`,
    }
  });
};
