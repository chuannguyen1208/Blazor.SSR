export class BlazorQuill {
    static quill;

    static init(element) {
        console.log('quill init...');

        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }],

            //[{ 'font': [] }],
            //[{ 'header': 1 }, { 'header': 2 }],
            //[{ 'list': 'ordered' }, { 'list': 'bullet' }],
            //[{ 'script': 'sub' }, { 'script': 'super' }],
            //[{ 'indent': '-1' }, { 'indent': '+1' }],
            //[{ 'direction': 'rtl' }],
            //[{ 'size': ['small', false, 'large', 'huge'] }],
            //[{ 'align': [] }],
            //['clean']
        ];

        this.quill = new Quill(element, {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow',
        });
    }

    static getContent() {
        return this.quill.root.innerHTML;
    }

    static showContent(elementRef) {
        elementRef.innerHTML = this.getContent();
    }
}

window.BlazorQuill = BlazorQuill;