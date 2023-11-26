# Blazor.SSR Rich Text Editor with Quilljs

I'm trying to learn Blazor new version in .NET 8 which has static server side rendering and also @rendermode. 
I intended to build a blog site for myself, in order to archive it, I have to have a page which has rich text editor.
Eventually, I find out Quilljs

Quilljs version using in this sample is 1.0.0 cause 1.3.6 having an issue related to js deprecated functions. I have to rollback to previous version to wait for version 2.0

Key functionalities:
- Distinguish @rendermode default (without @rendermode which is static server side rendering), InteractiveServer, InteractiveWebAssembly, InteractiveAuto
- How to work with js file and function effectively using IJSObjectReference, ElementReference
- The Rich Text Editor port to a component and can be reused

<img width="1127" alt="image" src="https://github.com/chuannguyen1208/Blazor.SSR/assets/93895222/4fe6c5d9-84d8-4a0a-9d9d-1200f2dd9620">

