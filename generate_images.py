"""
HVAC image generation for Cool Doc HVAC Service website.
Model: gemini-3.1-flash-image-preview

Run:
  source /Users/mityamit/castells-calls/venv/bin/activate
  python generate_images.py
"""

import os
import base64
from google import genai
from google.genai import types

API_KEY = "AIzaSyC3IgaxtlXppuvbevqt0ar_LYcrBYnmBOU"
MODEL = "gemini-3.1-flash-image-preview"

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "public", "generated")
os.makedirs(OUTPUT_DIR, exist_ok=True)

client = genai.Client(api_key=API_KEY)


def generate_image(prompt: str, filename: str) -> bool:
    print(f"\nGenerating: {filename}...")
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"]
            )
        )
        for part in response.candidates[0].content.parts:
            if part.inline_data:
                ext = "jpg" if "jpeg" in part.inline_data.mime_type else "png"
                out_path = os.path.join(OUTPUT_DIR, f"{filename}.{ext}")
                raw = part.inline_data.data
                img_data = raw if isinstance(raw, bytes) else base64.b64decode(raw)
                with open(out_path, "wb") as f:
                    f.write(img_data)
                print(f"  Saved: {out_path} ({len(img_data) // 1024} KB)")
                return True
        print(f"  No image in response for {filename}")
        return False
    except Exception as e:
        print(f"  ERROR: {e}")
        return False


# Hero background
generate_image("""
Photorealistic wide-angle photo of a modern luxury home in Los Angeles at golden hour.
Large modern air conditioning outdoor unit visible. Beautiful California architecture,
palm trees, warm sunset light. Affluent neighborhood, clean exterior.
No text. 16:9 panoramic, ultra-sharp professional photography.
""", "hero-hvac-bg")

# Service images
SERVICES = [
    ("service-ac", """
Photorealistic photo of a modern white split air conditioner installed on a living room wall.
Blue indicator light glowing, cool air flowing. Bright clean luxury interior.
No people, no text. Square format, professional product photography.
"""),
    ("service-heating", """
Photorealistic photo of a modern high-efficiency gas furnace in a clean utility room.
Stainless steel, digital control panel, clean pipes and venting.
Professional installation. No people, no text. Square format.
"""),
    ("service-ductless", """
Photorealistic photo of a sleek white ductless mini-split system wall unit in a modern bedroom.
Slim elegant design, soft ambient light. No people, no text. Square format.
"""),
    ("service-maintenance", """
Photorealistic close-up of HVAC technician gloved hands using digital diagnostic gauges
on an air conditioning compressor outdoors. Professional tools. No face. Square format.
"""),
    ("service-commercial", """
Photorealistic photo of large commercial HVAC rooftop units on a modern office building in LA.
Multiple RTU units, blue sky, LA skyline background. No text. Square format.
"""),
]

for fname, prompt in SERVICES:
    generate_image(prompt, fname)

# Team photos
TEAM = [
    ("team-hvac-alex", """
Professional headshot of confident white male in his 50s, silver-haired,
wearing red polo shirt with small company logo patch on chest.
Holding HVAC diagnostic tablet. Warm smile. Grey studio background. No text.
"""),
    ("team-hvac-sarah", """
Professional headshot of friendly professional woman in her 30s,
wearing dark navy blazer with company logo badge. Warm smile, light brown hair.
Modern office background blurred. Professional corporate headshot. No text.
"""),
    ("team-hvac-mike", """
Professional headshot of confident hispanic male HVAC technician in his 40s,
wearing red polo shirt with company logo patch. Holding refrigerant gauges.
Friendly smile. Grey studio background. No text.
"""),
    ("team-hvac-david", """
Professional headshot of young asian male HVAC technician in his 30s,
wearing red polo shirt with company logo patch. Friendly smile.
Grey studio background. Professional headshot. No text.
"""),
]

for fname, prompt in TEAM:
    generate_image(prompt, fname)

print("\nDone! Files in:", OUTPUT_DIR)
for f in sorted(os.listdir(OUTPUT_DIR)):
    if any(x in f for x in ['hvac', 'service-ac', 'service-h', 'service-d', 'service-m', 'service-c']):
        path = os.path.join(OUTPUT_DIR, f)
        print(f"  {f} — {os.path.getsize(path) // 1024} KB")
