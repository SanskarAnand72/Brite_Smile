import os
import re

files = ['appointments', 'blogs', 'doctors', 'faqs', 'testimonials', 'treatments', 'users']

for name in files:
    fpath = f'e:/dental--/src/app/admin/{name}/columns.tsx'
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace DropdownMenuTrigger wrapping Button
    content = re.sub(
        r'<DropdownMenuTrigger asChild>\s*<Button[^>]*>(.*?)</Button>\s*</DropdownMenuTrigger>',
        r'<DropdownMenuTrigger className="h-8 w-8 p-0 inline-flex items-center justify-center rounded-md hover:bg-slate-100">\1</DropdownMenuTrigger>',
        content,
        flags=re.DOTALL
    )
    
    # Replace remaining asChild
    content = content.replace('asChild>', '>')
    content = content.replace('asChild >', '>')
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done")
