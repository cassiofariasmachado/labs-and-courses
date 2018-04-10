export const textMixin = {
    data() {
        return {
            text: 'Some text'
        };
    },
    computed: {
        inversedText() {
            return this.text
                .split('')
                .reverse()
                .join('');
        },
        textWithLength() {
            return `${this.text} (${this.text.length})`;
        }
    }
}