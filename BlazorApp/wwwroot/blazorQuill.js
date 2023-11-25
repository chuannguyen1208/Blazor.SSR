export class BlazorQuill {
    static quill;

    static init(element) {
        console.log('quill init...');

        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],          // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],                 // custom button values
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],       // superscript/subscript
            [{ 'indent': '-1' }, { 'indent': '+1' }],           // outdent/indent
            [{ 'direction': 'rtl' }],                           // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],    // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],            // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                            // remove formatting button
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
}

window.BlazorQuill = BlazorQuill;