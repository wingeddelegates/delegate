#!/usr/bin/env python3
"""
Image cropping script for hyde-apt-display.png
Crops the top 15% and bottom 10% of the image
"""

from PIL import Image
import os

def crop_image(input_path, output_path, top_percent=15, bottom_percent=10):
    """
    Crop an image by removing a percentage from top and bottom
    
    Args:
        input_path (str): Path to input image
        output_path (str): Path to save cropped image
        top_percent (int): Percentage to crop from top
        bottom_percent (int): Percentage to crop from bottom
    """
    try:
        # Open the image
        img = Image.open(input_path)
        width, height = img.size
        
        print(f"Original image dimensions: {width}x{height}")
        
        # Calculate crop boundaries
        top_crop = int(height * (top_percent / 100))
        bottom_crop = int(height * (bottom_percent / 100))
        
        # Create crop box (left, upper, right, lower)
        crop_box = (0, top_crop, width, height - bottom_crop)
        
        print(f"Cropping top {top_percent}% ({top_crop}px) and bottom {bottom_percent}% ({bottom_crop}px)")
        
        # Perform crop
        cropped_img = img.crop(crop_box)
        cropped_width, cropped_height = cropped_img.size
        
        print(f"New image dimensions: {cropped_width}x{cropped_height}")
        
        # Save cropped image
        cropped_img.save(output_path)
        print(f"✓ Image saved to {output_path}")
        
    except FileNotFoundError:
        print(f"✗ Error: Input file '{input_path}' not found")
    except Exception as e:
        print(f"✗ Error: {str(e)}")

if __name__ == "__main__":
    # Define paths
    input_file = "images/hyde-apt-display.png"
    output_file = "images/hyde-apt-display.png"  # Overwrite original
    
    # Check if input exists
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found in current directory")
        exit(1)
    
    # Run crop
    crop_image(input_file, output_file, top_percent=15, bottom_percent=10)
