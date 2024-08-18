# run in colab

!apt-get install tesseract-ocr
!pip install pytesseract opencv-python
import pytesseract
pytesseract.pytesseract.tesseract_cmd = '/usr/bin/tesseract'

import cv2
import pytesseract

# Set the path to the Tesseract-OCR executable (required only on Windows)
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def extract_text_from_image(image_path):
    # Read the image
    img = cv2.imread(image_path)

    # Convert to grayscale (optional, but often improves OCR accuracy)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Apply thresholding (optional, depending on the image quality)
    _, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Remove noise (optional)
    noise_removed = cv2.medianBlur(thresh, 1)

    # Extract text using pytesseract
    text = pytesseract.image_to_string(noise_removed)

    return text

# Example usage
image_path = '/content/ab.png'  # Replace with your image file path
extracted_text = extract_text_from_image(image_path)
print("Extracted Text:")
print(extracted_text)

