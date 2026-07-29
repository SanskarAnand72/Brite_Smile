import os
from rembg import remove
from PIL import Image

input_path = "C:/Users/Nokia/.gemini/antigravity/brain/6c70b6e7-0ecb-45f5-a9e3-36c39d0afea9/happy_pixar_tooth_1785316815069.jpg"
output_path = "e:/dental--/public/images/mascot-happy-final.png"

try:
    print(f"Processing {input_path}")
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)
    print("Background removed successfully!")
except Exception as e:
    print(f"Error: {e}")
