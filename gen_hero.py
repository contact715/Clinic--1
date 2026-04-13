"""
Generate hero background — wide cinematic HVAC, no split panels
"""
import base64
from google import genai
from google.genai import types
from PIL import Image
import io, os

API_KEY = "AIzaSyC3IgaxtlXppuvbevqt0ar_LYcrBYnmBOU"
MODEL = "gemini-3.1-flash-image-preview"
OUTPUT = "/Users/mityamit/COOL DOC HVAC NEW/public/generated/hero-hvac-bg.jpg"

PROMPT = """Ultra-wide cinematic 16:9 hero background photograph for an HVAC company website.

A professional HVAC technician in a dark navy work uniform is working on a large outdoor air conditioning unit on a rooftop. The San Fernando Valley, Los Angeles stretches wide in the background — suburban streets, palm trees, a warm California sunset sky in deep orange and amber fading to purple-blue overhead. Mountains visible on the horizon.

CRITICAL: This must be ONE unified wide panoramic image — NOT a split image, NOT a diptych, NOT two panels. The entire frame is a single continuous scene.

Composition: The scene spans the full width naturally. Left side of frame has darker sky and shadowed rooftop gravel — suitable for white text overlay. Center-right has the technician and AC unit lit by warm golden sunset light from behind. Background city stretches across the full width.

Technical:
- Photorealistic, cinematic, editorial commercial photography quality
- Natural depth of field — city/sky background slightly soft, technician in focus
- Warm golden hour light source from the right/behind
- Dark vignette on the left third for text legibility
- No hard edges, no split panels, seamless wide composition
- Wide angle lens feel, expansive sky, dramatic scale
"""

client = genai.Client(api_key=API_KEY)

print(f"Generating new hero with {MODEL}...")

response = client.models.generate_content(
    model=MODEL,
    contents=PROMPT,
    config=types.GenerateContentConfig(
        response_modalities=["IMAGE", "TEXT"],
        temperature=1.0,
        top_p=0.95,
        thinking_config=types.ThinkingConfig(thinking_budget=8000),
    )
)

raw_bytes = None
for part in response.candidates[0].content.parts:
    if hasattr(part, 'inline_data') and part.inline_data and 'image' in (part.inline_data.mime_type or ''):
        raw_bytes = part.inline_data.data
        break

if not raw_bytes:
    raise RuntimeError("No image in response")

img = Image.open(io.BytesIO(raw_bytes))
w, h = img.size
print(f"Original: {w}x{h} (ratio {w/h:.3f}, 16:9 = {16/9:.3f})")

# Upscale to 3840x2160
img_4k = img.resize((3840, 2160), Image.LANCZOS)
img_4k.save(OUTPUT, "JPEG", quality=95, optimize=True)
size_mb = os.path.getsize(OUTPUT) / 1024 / 1024
print(f"Saved 4K: {size_mb:.2f} MB → {OUTPUT}")
