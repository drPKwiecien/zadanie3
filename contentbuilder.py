import os
import json
from docx import Document

def read_docx(file_path):
    doc = Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    # Split the text by '---' to separate different parts
    parts = '\n'.join(full_text).split('---')
    return parts

def build_posts_json(posts_path):
    posts = {}
    for slug in os.listdir(posts_path):
        post_dir = os.path.join(posts_path, slug)
        if os.path.isdir(post_dir):
            posts[slug] = {'images': []}  # Initialize with only images
            for item in os.listdir(post_dir):
                if item.endswith('.docx'):
                    docx_path = os.path.join(post_dir, item)
                    docx_parts = read_docx(docx_path)
                    # Assign each part to the corresponding key
                    for i, part in enumerate(docx_parts, start=1):
                        part_key = f'textPart{i}'
                        posts[slug][part_key] = part.strip()  # Remove leading/trailing whitespace
                elif item.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.mp4', '.webm', '.ogg')):
                    # Handle both images and videos
                    media_type = 'image' if item.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')) else 'video'
                    posts[slug]['images'].append({
                        'src': f'/posts/{slug}/{item}',
                        'alt': f'{media_type.title()} for {slug}',
                        'type': media_type
                    })
    return posts

posts_data = build_posts_json('public/posts/')
with open('src/data/posts.json', 'w') as f:
    json.dump(posts_data, f, indent=4)

