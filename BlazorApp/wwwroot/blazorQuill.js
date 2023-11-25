export class BlazorQuill {
    static quill;

    static init(element) {
        console.log('quill init...');

        var toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }]
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

    static listen(elementRef) {
        this.quill.on('text-change', function () {
            this.showContent(elementRef);
        }.bind(this));
    }
}

window.BlazorQuill = BlazorQuill;