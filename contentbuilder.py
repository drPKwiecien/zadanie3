import os
import json
from docx import Document

def read_docx(file_path):
    doc = Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        full_text.append(para.text)
    return '\n'.join(full_text)

def build_posts_json(posts_path):
    posts = {}
    for slug in os.listdir(posts_path):
        post_dir = os.path.join(posts_path, slug)
        if os.path.isdir(post_dir):
            posts[slug] = {'images': [], 'textPart1': '', 'textPart2': ''}
            for item in os.listdir(post_dir):
                if item.endswith('.docx'):
                    docx_path = os.path.join(post_dir, item)
                    docx_content = read_docx(docx_path)
                    # Assuming the first document is textPart1 and the second is textPart2
                    if 'textPart1' not in posts[slug] or not posts[slug]['textPart1']:
                        posts[slug]['textPart1'] = docx_content
                    else:
                        posts[slug]['textPart2'] = docx_content
                if item.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
                    posts[slug]['images'].append({
                        'src': f'/posts/{slug}/{item}',
                        'alt': f'Image for {slug}'
                    })
    return posts

posts_data = build_posts_json('public/posts/')
with open('src/data/posts.json', 'w') as f:
    json.dump(posts_data, f, indent=4)
